
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDevice } from './selector'
import { deviceListReq, devicePatchReq } from './action'
import { listFilter } from '../utils/helpers'

import Device from '../components/device'
import ActiveCounter from '../components/activeCounter'
import Search from '../components/search'

import './style.css'

class DeviceList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
    this._onSearch = this._onSearch.bind(this)
    this._onStateChange = this._onStateChange.bind(this)
  }

  _onSearch (query) {
    this.setState({ query })
  }

  _onStateChange (readingName, stateValue) {
    this.props.patchDevice(readingName, stateValue)
  }

  componentDidMount () {
    this.props.getDeviceList({})
  }

  render () {
    const { query } = this.state
    let { device: { data } } = this.props

    data = query ? listFilter(data, query, 'name') : data

    return (
      <div>
        <h2>Device List</h2>
        <hr />
        <Search onSearch={this._onSearch} />
        <hr />
        <ActiveCounter data={data} />
        <hr />
        {
          data.map((device, index) => {
            return <Device key={index} device={device} onStateChange={this._onStateChange} />
          })
        }
      </div>
    )
  }
}

const stateToProps = state => ({
  device: getDevice(state)
})

const dispatchToProps = dispatch => ({
  getDeviceList: () => dispatch(deviceListReq()),
  patchDevice: (readingName, stateValue) => dispatch(devicePatchReq({ readingName, stateValue }))
})

export default connect(stateToProps, dispatchToProps)(DeviceList)
