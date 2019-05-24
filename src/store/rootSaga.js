import { fork, all } from 'redux-saga/effects'

import * as deviceSaga from '../DeviceList/saga'

const sagas = {
  ...deviceSaga
}

const forkedSagas = Object.keys(sagas).map(key => fork(sagas[key]))

export default function * rootSaga () {
  yield all(forkedSagas)
}
