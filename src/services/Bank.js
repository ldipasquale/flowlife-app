import { AsyncStorage } from 'react-native'

import apiClient from './apiClient'

export default {
  payCreditCard: async ({ amount }) => {
    const userEmail = await AsyncStorage.getItem('email')

    return apiClient.post('action')({
      action: 'pay_credit_card',
      amount,
      email: userEmail,
    })
  },
  increaseCreditCardLimit: async ({ amount }) => {
    const userEmail = await AsyncStorage.getItem('email')

    return apiClient.post('action')({
      action: 'request_new_credit_card_limit',
      amount,
      email: userEmail,
    })
  },
  payLoan: async ({ id, amount }) => {
    const userEmail = await AsyncStorage.getItem('email')

    return apiClient.post('action')({
      action: 'pay_loan',
      amount,
      loan_id: id,
      email: userEmail,
    })
  },
  requestLoan: async ({ amount, duration, interestRate }) => {
    const userEmail = await AsyncStorage.getItem('email')

    return apiClient.post('action')({
      action: 'request_loan',
      amount,
      duration,
      interest_rate: interestRate,
      email: userEmail,
    })
  },
  requestFixedTermDeposit: async ({ amount, duration, interestRate }) => {
    const userEmail = await AsyncStorage.getItem('email')

    return apiClient.post('action')({
      action: 'request_plazo_fijo',
      amount,
      duration,
      interest_rate: interestRate,
      email: userEmail,
    })
  },
}
