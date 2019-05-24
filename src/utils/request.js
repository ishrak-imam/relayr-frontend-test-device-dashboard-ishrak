
/* eslint-disable */

import config from '../../config.json'
const SERVER_URL = config.SERVER_URL
const REQUEST_TIMEOUT = 30000
const COMMON_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const errorHandler = error => {
  if (error === 'TIMEOUT') {
    return Promise.reject({
      status: 'REQ_TIMEOUT',
      msg: 'Request timeout'
    })
  }

  return Promise.reject(error)
}

const responseHandler = response => {
  if (response.status === 200) return response.json()
  if (response.status === 400) return Promise.reject()
}

const createFetchPromise = (method, endPoint, data, headers) => {
  const options = {
    method,
    headers: { ...headers, ...COMMON_HEADERS }
  }
  if (method !== 'GET' && method !== 'PATCH') options.body = JSON.stringify(data)
  return fetch(`${SERVER_URL}${endPoint}`, options)
}

const createTimeoutPromise = () => {
  return new Promise((resolve, reject) => setTimeout(() => reject('TIMEOUT'), REQUEST_TIMEOUT))
}

export const patchRequest = (endPoint, data, headers = {}) => {
  return Promise.race([
    createFetchPromise('PATCH', endPoint, data, headers),
    createTimeoutPromise()
  ]).then(responseHandler).catch(errorHandler)
}

export const getRequest = (endPoint, headers = {}) => {
  return Promise.race([
    createFetchPromise('GET', endPoint, {}, headers),
    createTimeoutPromise()
  ]).then(responseHandler).catch(errorHandler)
}
