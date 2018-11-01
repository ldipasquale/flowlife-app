import { AsyncStorage } from 'react-native'

import apiClient from './apiClient'

export default {
  signIn: async ({ email, password }) => {
    const { ok } = await apiClient.post(`login/${email}`)({ password })

    return ok
  },
  signUp: values => apiClient.post('rapper')(values),
  get: id => apiClient.get(`rapper/${id}`),
  relax: async () => {
    const userEmail = await AsyncStorage.getItem('email')

    return apiClient.post('action')({
      action: 'relax',
      email: userEmail,
    })
  },
}
