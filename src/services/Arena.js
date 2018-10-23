import apiClient from './apiClient'

export default {
  get: () => apiClient.get('venues'),
  //get: () => new Promise(resolve => setTimeout(resolve, 2000, [{name:'b',cost:10,capacity:22},{name:'c',cost:10,capacity:22}])),
}
