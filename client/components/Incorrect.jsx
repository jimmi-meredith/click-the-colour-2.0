import React from 'react'
import { connect } from 'react-redux'

import { setGameState } from '../actions'

const Incorrect = () => {
  return (
    <div className='incorrect'>
      <h1 className='heading'>Oops!</h1>
      <p className='score'>Your final score is </p>
      <button className='start-button'>Try Again</button>
    </div>
  )
}

export default connect(null, { setGameState })(Incorrect)
