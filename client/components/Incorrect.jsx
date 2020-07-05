import React from 'react'
import { connect } from 'react-redux'

import { setGameState } from '../actions'

const Incorrect = props => {
  return (
    <div className='incorrect'>
      <h1 className='heading'>Oops!</h1>
      <p className='score'>Your final score is </p>
      <button className='start-button' onClick={() => props.setGameState('game')}>Try Again</button>
    </div>
  )
}

mapStateToProps = state => {
  return {
    score: state.score
  }
}

export default connect(null, { setGameState })(Incorrect)
