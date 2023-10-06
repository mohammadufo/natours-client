import axios from 'axios'

function api(method: string, url: string, params: any, data: any) {
  const axiosRequest = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
  })

  const headers: { Accept: string } = {
    Accept: 'application/json',
  }
  return axiosRequest({
    method,
    url,
    params,
    data,
    headers,
    withCredentials: true,
  })
    .then((response: any) => {
      return handleAxiosResponse(response)
    })
    .catch((error: any) => {
      return handleAxiosResponse(error)
    })
}

function handleAxiosResponse(response: any) {
  return new Promise((resolve, reject) => {
    switch (Math.floor(response.status / 100)) {
      case 2:
        if (response.data.status !== 'success') {
          return reject(response.data.message)
        }
        return resolve(response.data)
      default:
        if (response.status === 401 || response.status === 403) {
          reject(response.data.message)
        } else {
          reject(
            'Sorry, Something went wrong! and I do not know what is that! 💀'
          )
        }
    }
  })
}

export const publicService = {
  api,
  handleAxiosResponse,
}
