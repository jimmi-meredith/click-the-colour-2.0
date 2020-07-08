import { combineReducers } from 'redux'

import gameState from './gameState'
import score from './score'
import level from './level'

export default combineReducers({
  gameState,
  score,
  level
})
