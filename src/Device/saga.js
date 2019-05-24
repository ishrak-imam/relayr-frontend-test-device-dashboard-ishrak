import { call, put } from 'redux-saga/effects'
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

function * workerDeviceListReq (action) {
  try {
    const { data } = yield call(getDeviceList)
    yield put(deviceListSucs({ data }))
  } catch (e) {
    yield put(deviceListFail())
  }
}
