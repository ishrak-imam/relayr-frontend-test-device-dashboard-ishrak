
import { showToast } from '../modules/Toast/action'

const toast = store => next => action => {
  const result = next(action)
  if (action.payload && action.payload.toast) {
    const { text, type } = action.payload.toast
    store.dispatch(showToast({ text, type }))
  }
  return result
}

export default toast
