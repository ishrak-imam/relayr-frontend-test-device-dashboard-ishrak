import { combineReducers } from 'redux'

import * as device from '../Device/reducer'

const rootReducer = combineReducers({
  ...device
})

export default rootReducer
