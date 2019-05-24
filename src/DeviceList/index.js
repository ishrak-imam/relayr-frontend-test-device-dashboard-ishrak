
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDevice } from './selector'
import { deviceListReq } from './action'
import { listFilter } from '../utils/helpers'

import Device from '../components/device'
import Search from '../components/search'

class DeviceList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ''
    }
    this._onSearch = this._onSearch.bind(this)
  }

  _onSearch (query) {
    this.setState({ query })
  }

  componentDidMount () {
    this.props.getDeviceList({})
  }

  render () {
    const { query } = this.state
    let { device: { data } } = this.props

    data = query ? listFilter(data, query, 'name') : data

    return (
      <div className='reactjs-app'>
        <h2>Device List</h2>
        <hr />
        <Search onSearch={this._onSearch} />
        <hr />
        {
          data.map((device, index) => {
            return <Device key={index} device={device} />
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
  getDeviceList: () => dispatch(deviceListReq())
})

export default connect(stateToProps, dispatchToProps)(DeviceList)
