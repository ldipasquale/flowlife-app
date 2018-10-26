import axios from 'axios'
import apiConfig from '@config/api'

class APIClient {
  constructor() {
    this.service = axios.create({
      baseURL: apiConfig.url,
    })

    this.getResponses = {}
  }

  async get(path) {
    if (this.getResponses[path]) {
      return this.getResponses[path]
    }

    return this.service.get(path).then((response) => {
      this.getResponses[path] = response.data

      return response.data
    })
  }

  patch(path, payload, callback) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    }).then(response => callback(response.status, response.data))
  }

  post(path, payload, callback) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    }).then(response => callback(response.status, response.data))
  }
}

export default new APIClient()
