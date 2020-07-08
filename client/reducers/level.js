import { UPDATE_LEVEL } from '../actions'

const level = (state = 1, action) => {
  switch (action.type) {
    case UPDATE_LEVEL:
      return state + 1
    default:
      return state
  }
}

export default level
