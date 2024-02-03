import axios from 'axios'
import { wait } from '../utils/helpers'

const isProduction = process.env.mode === 'production'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
})

if (!isProduction) {
  api.interceptors.request.use(async (config) => {
    await wait(1)
    return config
  })
}

api.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    throw err.response.data
  }
)

export { api }
