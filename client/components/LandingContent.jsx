import React from 'react'
import { connect } from 'react-redux'

import { setGameState } from '../actions'

const LandingContent = () => {
  return (
    <>
    <div className='introduction'>
      <p>Race against the Clock!</p>
      <p>See how many colours you can click. All you have to do is click the <strong>colour of the word.</strong></p>
      <p>Not the word, but the colour... Get it? Cool.</p>
      <p>Get clicking!</p>
    </div>
    <div className='start-button'>
      <button>Start Game</button>
    </div>
    </>
  )
}

export default connect(null, { setGameState })(LandingContent)
