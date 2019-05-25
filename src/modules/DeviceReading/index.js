
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDevice } from './selector'
import { deviceReadingReq, devicePatchReq } from './action'
import { listFilterByString } from '../../utils/helpers'

import Reading from '../../components/reading'
import ActiveCounter from '../../components/activeCounter'
import Search from '../../components/search'

import './style.css'

class DeviceReading extends Component {
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
    this.props.getDeviceReading({})
  }

  render () {
    const { query } = this.state
    let { device: { data } } = this.props

    data = query ? listFilterByString(data, query, 'name') : data

    return (
      <div className='container'>
        <h2>Device Dashboard</h2>
        <hr />
        <Search onSearch={this._onSearch} />
        <hr />
        <ActiveCounter data={data} />
        <hr />
        {data.map(device =>
          <Reading
            key={device.name}
            device={device}
            onStateChange={this._onStateChange}
          />
        )}
      </div>
    )
  }
}

const stateToProps = state => ({
  device: getDevice(state)
})

const dispatchToProps = dispatch => ({
  getDeviceReading: () => dispatch(deviceReadingReq()),
  patchDevice: (readingName, stateValue) => dispatch(devicePatchReq({ readingName, stateValue }))
})

export default connect(stateToProps, dispatchToProps)(DeviceReading)
