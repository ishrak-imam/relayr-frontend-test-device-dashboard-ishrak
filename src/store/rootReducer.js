import { combineReducers } from 'redux'

import * as device from '../modules/DeviceReading/reducer'

const rootReducer = combineReducers({
  ...device
})

export default rootReducer
