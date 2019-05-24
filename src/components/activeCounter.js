import React from 'react'

const ActiveCounter = ({ data }) => {
  const { active, inactive } = data.reduce((map, item) => {
    item.active ? map.active += 1 : map.inactive += 1
    return map
  }, { active: 0, inactive: 0 })

  return (
    <div className='card row'>
      <div className='col-xs-6'>
        <h4 className='card-title'>Active: {active}</h4>
      </div>

      <div className='col-xs-6'>
        <h4 className='card-title'>Inactive: {inactive}</h4>
      </div>
    </div>
  )
}
export default ActiveCounter
