
export const createReducer = (initialState, handlers) => {
  const reducer = (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action.payload)
    } else {
      return state
    }
  }
  return reducer
}

export const createAction = type => {
  const action = payload => ({
    type,
    payload
  })
  action.getType = () => type
  return action
}

export const updateObject = (object, values) => {
  return { ...object, ...values }
}

export const updateObjectInList = (list, object, identifier, value) => {
  return list.map(item => {
    if (item[identifier] !== value) return item
    return updateObject(item, object)
  })
}
