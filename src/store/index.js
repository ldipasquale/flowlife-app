import { createStore, combineReducers } from 'redux'

import tree from './tree'

export default createStore(
  combineReducers(tree),
)
