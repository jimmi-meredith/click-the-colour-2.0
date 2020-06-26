import React from 'react'
import { connect } from 'react-redux'

import { setGameState } from '../actions'

const TimeUp = props => {
  return (
    <div className='time-up'>
      <h1 className='heading'>Time is up!</h1>
      <p className='score'>Your final score is </p>
      <button className='start-button' onClick={() => props.setGameState('game')}>Try Again</button>
    </div>
  )
}

export default connect(null, { setGameState })(TimeUp)
