
import { createAction } from '../utils/reduxHelpers'

export const DEVICE_LIST_REQ = 'DEVICE_LIST_REQ'
export const DEVICE_LIST_SUCS = 'DEVICE_LIST_SUCS'
export const DEVICE_LIST_FAIL = 'DEVICE_LIST_FAIL'

export const DEVICE_PATCH_REQ = 'DEVICE_PATCH_REQ'
export const DEVICE_PATCH_SUCS = 'DEVICE_PATCH_SUCS'
export const DEVICE_PATCH_FAIL = 'DEVICE_PATCH_FAIL'

export const deviceListReq = createAction(DEVICE_LIST_REQ)
export const deviceListSucs = createAction(DEVICE_LIST_SUCS)
export const deviceListFail = createAction(DEVICE_LIST_FAIL)

export const devicePatchReq = createAction(DEVICE_PATCH_REQ)
export const devicePatchSucs = createAction(DEVICE_PATCH_SUCS)
export const devicePatchFail = createAction(DEVICE_PATCH_FAIL)
