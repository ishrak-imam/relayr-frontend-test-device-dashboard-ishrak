import React from 'react'
import { format } from 'date-fns'

const Device = ({ device }) => {
  return (
    <div className='card row'>
      <div className='col-xs-6'>
        <h4 className='card-title'>{device.name}</h4>
        <h6>{device.value} {device.unit}</h6>
        <span>{format(device.timestamp, 'hh:mm:ss a - Do MMM YYYY')}</span>
      </div>

      <div className='col-xs-6'>
        <div className='card-body' />
      </div>
    </div>
  )
}
export default Device
