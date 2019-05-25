
import { getRequest, patchRequest } from '../../utils/request'

export const getDeviceReading = () => {
  return getRequest('/device')
}

export const patchDevice = (readingName, stateValue) => {
  return patchRequest(`/device/${readingName}?active=${stateValue}`)
}
