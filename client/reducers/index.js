import { combineReducers } from 'redux'

import gameState from './gameState'
import updateScore from './updateScore'

export default combineReducers({
  gameState,
  updateScore
})
