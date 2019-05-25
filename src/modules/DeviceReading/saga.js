import { call, put, takeEvery } from 'redux-saga/effects'
import { takeFirst } from '../../utils/sagaHelpers'
import {
  deviceReadingReq,
  deviceReadingSucs,
  deviceReadingFail,

  devicePatchReq,
  devicePatchSucs,
  devicePatchFail
} from './action'

import { getDeviceReading, patchDevice } from './api'

export function * watchDeviceReadingReq () {
  yield takeFirst(deviceReadingReq.getType(), workerDeviceReadingReq)
}

function formatData (list) {
  return list.map(item => {
    item.loading = false
    return item
  })
}

function * workerDeviceReadingReq (action) {
  try {
    const { data } = yield call(getDeviceReading)
    yield put(deviceReadingSucs({ data: formatData(data) }))
  } catch (e) {
    yield put(deviceReadingFail())
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
