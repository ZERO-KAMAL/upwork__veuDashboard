import { ref } from '@vue/composition-api'
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axiosIns from '@/libs/axios'

export default function usePoliciesList() {
  // Use toast
  const toast = useToast()

  const refPoliciesListTable = ref(null)

  // Table Handlers
  const tableColumns = [
    { key: 'policy_number', sortable: true },
    { key: 'client', sortable: true },
    { key: 'sales_status', sortable: true },
    { key: 'brokerage', sortable: true },
    { key: 'ineption', sortable: true },
    { key: 'bound', sortable: true },
    { key: 'options' },
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

  const fetchPolicies = () => {
    const url = `${process.env.VUE_APP_BASE_API_URL}/admin/policy`
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
            title: 'Error fetching users list',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  return {
    fetchPolicies,
    tableColumns,
    perPage,
    currentPage,
    totalUsers,
    perPageOptions,
    searchQuery,
    sortBy,
    isSortDirDesc,
    refPoliciesListTable,
    uloading,
    status,
    type,
    users,
    cUsers,
  }
}
