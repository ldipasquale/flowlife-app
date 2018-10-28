import { AsyncStorage } from 'react-native'

import apiClient from './apiClient'

export default {
  get: () => apiClient.get('store'),
  buy: async ({ item, paymentMethod }) => {
    const userEmail = await AsyncStorage.getItem('email')

    return apiClient.post('action')({
      action: 'buy_item',
      item_id: item.name,
      payment_method: paymentMethod,
      email: userEmail,
    })
  },
}
