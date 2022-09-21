import axiosIns from '@/libs/axios'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers(ctx, queryParams) {
      const url = 'admin/users/search'
      return new Promise((resolve, reject) => {
        axiosIns({
          method: 'post',
          url,
          data: queryParams,
        })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchUser(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axiosIns
          .get(`/admin/users/edit/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addUser(ctx, userData) {
      return new Promise((resolve, reject) => {
        axiosIns
          .post('/apps/user/users', { user: userData })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchBrokage() {
      const url = '/admin/brokerages'
      return new Promise((resolve, reject) => {
        axiosIns
          .get(url)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
