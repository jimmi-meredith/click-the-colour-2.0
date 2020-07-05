export const SET_GAME_STATE = 'SET_GAME_STATE'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const RESET_SCORE = 'RESET_SCORE'

export const setGameState = gameState => {
  return {
    type: SET_GAME_STATE,
    gameState
  }
}

export const updateScore = () => {
  return {
    type: UPDATE_SCORE
  }
}

export const resetScore = () => {
  return {
    type: RESET_SCORE
  }
}
