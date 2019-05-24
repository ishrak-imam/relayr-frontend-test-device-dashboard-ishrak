import { combineReducers } from 'redux'

import * as device from '../DeviceReading/reducer'

const rootReducer = combineReducers({
  ...device
})

export default rootReducer
