import { fork, all } from 'redux-saga/effects'

import * as deviceSaga from '../modules/DeviceReading/saga'
import * as toastSaga from '../modules/Toast/saga'

const sagas = {
  ...deviceSaga,
  ...toastSaga
}

const forkedSagas = Object.keys(sagas).map(key => fork(sagas[key]))

export default function * rootSaga () {
  yield all(forkedSagas)
}
