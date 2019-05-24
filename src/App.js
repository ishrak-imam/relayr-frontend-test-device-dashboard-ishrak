import React from 'react'
import DeviceList from './DeviceList'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <div>
      <DeviceList />
      <ToastContainer />
    </div>
  )
}

export default App
