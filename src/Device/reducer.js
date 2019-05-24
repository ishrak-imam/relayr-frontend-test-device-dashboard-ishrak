
import { createReducer, updateObject } from '../utils/reduxHelpers'

import {
  DEVICE_LIST_REQ,
  DEVICE_LIST_SUCS,
  DEVICE_LIST_FAIL,

  DEVICE_PATCH_REQ,
  DEVICE_PATCH_SUCS,
  DEVICE_PATCH_FAIL
} from './action'

import { DEVICE_INITIAL_STATE } from './initialState'

export const device = createReducer(DEVICE_INITIAL_STATE, {
  [DEVICE_LIST_REQ]: state => updateObject(state, { isLoading: true }),
  [DEVICE_LIST_SUCS]: (state, payload) => updateObject(state, { data: payload.data, isLoading: false }),
  [DEVICE_LIST_FAIL]: state => updateObject(state, { isLoading: false })
})
