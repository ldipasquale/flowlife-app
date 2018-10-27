import apiClient from './apiClient'

export default {
  signIn: async ({ email, password }) => {
    const { ok } = await apiClient.post(`login/${email}`)({ password })

    return ok
  },
  signUp: values => apiClient.post('rapper')(values),
}
