import React from 'react'
import { connect } from 'react-redux'

import { setGameState, resetScore } from '../actions'

const TimeUp = props => {
  const { setGameState, resetScore, score } = props

  const handleClick = () => {
    setGameState('game')
    resetScore()
  }

  // function increaseLevel (score, level) {
  //   if (score >= 7) {
  //     return level + 1
  //   }
  // }

  return (
    <div className='time-up'>
      <h1 className='heading'>Time is up!</h1>
      <p className='score'>Your final score is {score}</p>
      <button className='start-button' onClick={() => handleClick()}>Try Again</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps, { setGameState, resetScore })(TimeUp)
