import apiClient from './apiClient'

export default {
  get: () => apiClient.get('store'),
  buy: ({ item, paymentMethod }) => apiClient.post('action')({
    action: 'buy_item',
    item_id: item.name,
    payment_method: paymentMethod,
    email: 'yolucianodipasquale@gmail.com',
  }),
}
