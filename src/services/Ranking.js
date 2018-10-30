import apiClient from './apiClient'

export default {
  get: () => apiClient.get('ranking', {
    disableCache: true,
  }),
}
