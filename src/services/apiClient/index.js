import axios from 'axios'
import apiConfig from '@config/api'

class APIClient {
  constructor() {
    this.service = axios.create({
      baseURL: apiConfig.url,
    })

    this.getResponses = {}
  }

  async get(path, { disableCache = false } = {}) {
    if (!disableCache && this.getResponses[path]) {
      return this.getResponses[path]
    }

    return this.service.get(path).then((response) => {
      this.getResponses[path] = response.data

      return response.data
    })
  }

  post(path) {
    return async payload => this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    }).then(response => response.data)
  }
}

export default new APIClient()
