import { ref, watch, computed } from '@vue/composition-api'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '@/store'

export default function useUsersList() {
  // Use toast
  const toast = useToast()

  const refUserListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'username', sortable: true },
    { key: 'email', sortable: true },
    { key: 'brokerage', sortable: true },
    { key: 'user_type', sortable: true },
    { key: 'status', sortable: true },
    { key: 'points', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalUsers = ref(0)
  const currentPage = ref(1)
  const limit = ref(6)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('display_name')
  const isSortDirDesc = ref(true)
  const template = ref('list_item')
  const roleFilter = ref(0)
  const brokageFilter = ref('')
  const statusFilter = ref(0)

  const dataMeta = computed(() => {
    const localItemsCount = refUserListTable.value ? refUserListTable.value.localItems.length : 0
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalUsers.value,
    }
  })

  const refetchData = () => {
    refUserListTable.value.refresh()
  }

  watch([currentPage, perPage, searchQuery, roleFilter, brokageFilter, statusFilter], () => {
    refetchData()
  })

  const fetchUsers = (ctx, callback) => {
    const form = new FormData()
    form.append('order_by', sortBy.value)
    form.append('ordering', isSortDirDesc.value ? 'ASC' : 'DESC')
    form.append('page_number', currentPage.value)
    form.append('template', template.value)
    form.append('limit', limit.value)
    form.append('rows_per_page', perPage.value)
    form.append('search_term', searchQuery.value)
    form.append('user_type', roleFilter.value ? roleFilter.value : '')
    form.append('brokerage', brokageFilter.value)
    form.append('status', statusFilter.value ? statusFilter.value : '')
    store
      .dispatch('app-user/fetchUsers', form)
      .then(response => {
        const { results, total } = response.data
        callback(results)
        totalUsers.value = total
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching users list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const resolveUserRoleVariant = role => {
    if (role === 'Syndicate') return 'warning'
    if (role === 'Authorised Rep') return 'success'
    if (role === 'Broker') return 'info'
    if (role === 'admin') return 'danger'
    return 'primary'
  }

  const resolveUserRoleIcon = role => {
    if (role === 'subscriber') return 'UserIcon'
    if (role === 'author') return 'SettingsIcon'
    if (role === 'maintainer') return 'DatabaseIcon'
    if (role === 'editor') return 'Edit2Icon'
    if (role === 'admin') return 'ServerIcon'
    return 'UserIcon'
  }

  const resolveUserStatusVariant = status => {
    if (status === 'Blocked') return 'danger'
    if (status === 'Pending') return 'warning'
    if (status === 'Active') return 'success'
    if (status === 'Inactive') return 'secondary'
    return 'primary'
  }

  return {
    fetchUsers,
    tableColumns,
    perPage,
    currentPage,
    totalUsers,
    dataMeta,
    perPageOptions,
    searchQuery,
    sortBy,
    template,
    refUserListTable,
    isSortDirDesc,

    resolveUserRoleVariant,
    resolveUserRoleIcon,
    resolveUserStatusVariant,
    refetchData,

    // Extra Filters
    roleFilter,
    brokageFilter,
    statusFilter,
  }
}
