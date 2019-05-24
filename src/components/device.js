import React, { Component } from 'react'
import { format } from 'date-fns'

import Spinner from './spinner'

export default class Device extends Component {
  // shouldComponentUpdate (nextProps) {
  //   return nextProps.device.loading !== this.props.device.loading
  // }

  render () {
    const { name, value, unit, timestamp, active, loading } = this.props.device
    const text = active ? 'Active' : 'Inactive'
    const className = active ? 'success' : 'danger'

    return (
      <div className='card row'>
        <div className='col-xs-6'>
          <h4 className='card-title'>{name}</h4>
          <h6>{value} {unit}</h6>
          <span>{format(timestamp, 'hh:mm:ss a - Do MMM YYYY')}</span>
        </div>

        <div className='col-xs-6'>
          {
            loading
              ? <div className='spnr'>
                <Spinner />
              </div>
              : <button
                onClick={() => this.props.onStateChange(name, !active)}
                type='button'
                className={`toggleBtn btn btn-${className}`}>{text}
              </button>
          }
        </div>
      </div>
    )
  }
}
