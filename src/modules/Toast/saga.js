import { take } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { showToast } from './action'

const DEFAULT_OPTIONS = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: true, // 5000 miliseconds
  closeButton: null,
  transition: null,
  hideProgressBar: false,
  pauseOnHover: true,
  closeOnClick: true,
  newestOnTop: true,
  className: null,
  style: null,
  toastClassName: null,
  bodyClassName: null,
  progressClassName: null
}

export function * workerToastErr () {
  while (true) {
    const { payload } = yield take(showToast.getType())
    const { text, type } = payload
    switch (type) {
      case 'ERROR':
        toast.error(text, DEFAULT_OPTIONS)
        break
    }
  }
}
