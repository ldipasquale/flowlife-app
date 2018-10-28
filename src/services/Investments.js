import { AsyncStorage } from 'react-native'

import apiClient from './apiClient'

export default {
  get: () => apiClient.get('investments'),
  invest: async ({ type, paymentMethod }) => {
    const userEmail = await AsyncStorage.getItem('email')
    
    return apiClient.post('action')({
      action: 'make_investment',
      investment_type: type,
      //payment_method: paymentMethod,
      email: userEmail,
    })
  },
}
