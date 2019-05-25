
import { createAction } from '../../utils/reduxHelpers'

export const DEVICE_READING_REQ = 'DEVICE_READING_REQ'
export const DEVICE_READING_SUCS = 'DEVICE_READING_SUCS'
export const DEVICE_READING_FAIL = 'DEVICE_READING_FAIL'

export const DEVICE_PATCH_REQ = 'DEVICE_PATCH_REQ'
export const DEVICE_PATCH_SUCS = 'DEVICE_PATCH_SUCS'
export const DEVICE_PATCH_FAIL = 'DEVICE_PATCH_FAIL'

export const deviceReadingReq = createAction(DEVICE_READING_REQ)
export const deviceReadingSucs = createAction(DEVICE_READING_SUCS)
export const deviceReadingFail = createAction(DEVICE_READING_FAIL)

export const devicePatchReq = createAction(DEVICE_PATCH_REQ)
export const devicePatchSucs = createAction(DEVICE_PATCH_SUCS)
export const devicePatchFail = createAction(DEVICE_PATCH_FAIL)
