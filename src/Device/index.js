
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDevice } from './selector'

import { deviceListReq } from './action'

class Device extends Component {
  componentDidMount () {
    this.props.getDeviceList({})
  }

  render () {
    return (
      <div>
        <span>device module</span>
      </div>
    )
  }
}

const stateToProps = state => ({
  device: getDevice(state)
})

const dispatchToProps = dispatch => ({
  getDeviceList: () => dispatch(deviceListReq())
})

export default connect(stateToProps, dispatchToProps)(Device)
