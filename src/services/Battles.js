import { AsyncStorage } from 'react-native'

import apiClient from './apiClient'

export default {
  win: async ({ win, arena }) => {
    const userEmail = await AsyncStorage.getItem('email')

    return apiClient.post('action')({
      action: 'concert',
      venue_id: arena.name,
      win,
      email: userEmail,
    })
  },
}
