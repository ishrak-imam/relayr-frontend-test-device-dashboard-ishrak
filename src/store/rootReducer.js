import { combineReducers } from 'redux'

import * as device from '../DeviceList/reducer'

const rootReducer = combineReducers({
  ...device
})

export default rootReducer
