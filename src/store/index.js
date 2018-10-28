import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import tree from './tree'

export default createStore(
  combineReducers(tree),
  applyMiddleware(thunk),
)
