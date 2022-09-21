import { ref } from '@vue/composition-api'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axiosIns from '@/libs/axios'

export default function useArnetworkList() {
  // Use toast
  const toast = useToast()

  const refArnetworkListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    // { key: 'id', sortable: true },
    // { key: 'user', sortable: true },
    { key: 'username', sortable: true },
    { key: 'brokerage', sortable: true },
    // { key: 'email', sortable: true },
    // { key: 'status', sortable: true },
    // { key: 'user_type', sortable: true },
    { key: 'actions' },
  ]
  const perPage = ref(10)
  const totalUsers = ref(0)
  const currentPage = ref(1)
  const perPageOptions = [10, 25, 50, 100]
  const searchQuery = ref('')
  const sortBy = ref('id')
  const isSortDirDesc = ref(true)
  const uloading = ref(false)
  const status = ref('')
  const type = ref('')
  const users = ref([])
  const cUsers = ref([])

  const fetchArnetworks = () => {
    const url = `${process.env.VUE_APP_BASE_API_URL}/admin/arnetworks`
    uloading.value = true
    axiosIns.get(url)
      .then(response => {
        const { status, data } = response.data
        if (status === 'success') {
          users.value = data.results
          totalUsers.value = users.value.length
          uloading.value = false
          cUsers.value = users.value
        }
      })
      .catch(() => {
        uloading.value = false
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching Ar-networks list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  return {
    fetchArnetworks,
    tableColumns,
    perPage,
    currentPage,
    totalUsers,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refArnetworkListTable,
    uloading,
    status,
    type,
    users,
    cUsers,
  }
}
