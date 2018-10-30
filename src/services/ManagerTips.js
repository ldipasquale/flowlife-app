import { AsyncStorage } from 'react-native'

import apiClient from './apiClient'

export default {
  get: async () => {
    const userEmail = await AsyncStorage.getItem('email')

    const managerTipsDict = await apiClient.get(`tips/${userEmail}`, {
      disableCache: true,
    })

    return Object.values(managerTipsDict)
  },
}
