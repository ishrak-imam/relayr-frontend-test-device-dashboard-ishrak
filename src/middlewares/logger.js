
const logger = store => next => action => {
  const result = next(action)
  console.groupCollapsed('%c ACTION', 'color: grey  ', action.type)
  console.log('%c DISPATCH     :: ', 'color: green', action)
  console.log('%c NEXT_STATE   :: ', 'color: green', store.getState())
  console.groupEnd()
  return result
}

export default logger
