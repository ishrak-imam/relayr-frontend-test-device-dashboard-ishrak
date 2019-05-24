
import { createStore, applyMiddleware } from 'redux'

import { getInitialState } from '../utils/initialState'
import rootReducer from './rootReducer'

import logger from '../middlewares/logger'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import Middlewares from '../middlewares'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware, ...Middlewares]

const store = createStore(
  rootReducer,
  getInitialState(),
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)
export default store
