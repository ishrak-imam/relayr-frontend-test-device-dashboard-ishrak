
import React, { Component } from 'react'
import debounce from '../utils/debounce'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this._onChangeText = this._onChangeText.bind(this)
    this._onSearch = this._onSearch.bind(this)
    this._onSearchDebounce = debounce(this._onSearch, 200)
  }

  _onSearch () {
    const { onSearch } = this.props
    onSearch(this.state.text.toLocaleLowerCase())
  }

  _onChangeText (text) {
    this.setState({ text }, this._onSearchDebounce)
  }

  render () {
    return (
      <div className='row'>
        <div className='col-xs-12'>
          <div className='form-row'>
            <input
              onChange={event => this._onChangeText(event.target.value)}
              value={this.state.text}
              type='text' placeholder='Search Device'
              className='form-control form-control-lg' />
          </div>
        </div>
      </div>
    )
  }
}

export default Search
