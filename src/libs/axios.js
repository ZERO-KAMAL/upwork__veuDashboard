import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  headers: { 'Content-Type': 'multipart/form-data' },
})

Vue.prototype.$http = axiosIns

export default axiosIns
