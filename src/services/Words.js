import apiClient from './apiClient'

export default {
  get: (amount = 5) => apiClient.get(`words/es/${amount}`, {
    disableCache: true,
  }),
}
