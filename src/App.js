import React from 'react'
import DeviceReading from './DeviceReading'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <div>
      <DeviceReading />
      <ToastContainer />
    </div>
  )
}

export default App
