import { SET_GAME_STATE } from '../actions'

const gameState = (state = '', action) => {
  switch (action.type) {
    case SET_GAME_STATE:
      return action.gameState
    default:
      return state
  }
}

export default gameState
