import { call, put, takeEvery } from 'redux-saga/effects'
import { takeFirst } from '../utils/sagaHelpers'
import {
  deviceListReq,
  deviceListSucs,
  deviceListFail,

  devicePatchReq,
  devicePatchSucs,
  devicePatchFail
} from './action'

import { getDeviceList, patchDevice } from './api'

export function * watchDeviceListReq () {
  yield takeFirst(deviceListReq.getType(), workerDeviceListReq)
}

function formatData (list) {
  return list.map(item => {
    item.loading = false
    return item
  })
}

function * workerDeviceListReq (action) {
  try {
    const { data } = yield call(getDeviceList)
    yield put(deviceListSucs({ data: formatData(data) }))
  } catch (e) {
    yield put(deviceListFail())
  }
}

export function * watchDevicePatchReq () {
  yield takeEvery(devicePatchReq.getType(), workerDevicePatchReq)
}

function * workerDevicePatchReq (action) {
  const { readingName, stateValue } = action.payload
  try {
    yield call(patchDevice, readingName, stateValue)
    yield put(devicePatchSucs({ readingName, stateValue }))
  } catch (e) {
    yield put(devicePatchFail({ readingName, toast: { text: e, type: 'ERROR' } }))
  }
}
