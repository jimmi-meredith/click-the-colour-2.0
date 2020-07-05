import { UPDATE_SCORE } from '../actions'

const score = (state = 0, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return state + 1
    default:
      return state
  }
}

export default score
