import apiClient from './apiClient'

export default {
  get: () => apiClient.get('venues'),
}
