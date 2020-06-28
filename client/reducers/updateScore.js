import { UPDATE_SCORE } from '../actions'

const updateScore = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return action.score
    default:
      return state
  }
}

export default updateScore
