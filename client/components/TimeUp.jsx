import React from 'react'
import { connect } from 'react-redux'

import { setGameState, resetScore } from '../actions'

const TimeUp = props => {
  const { setGameState, resetScore, score, level } = props

  const handleClick = () => {
    setGameState('game')
    resetScore()
  }

  return (
    <div className='time-up'>
      <h1 className='heading'>Time is up!</h1>
      <p className='score'>Your final score is {score}</p>
      <p>You have reached level (level here)</p>
      <button className='start-button' onClick={() => handleClick()}>Try Again</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    score: state.score,
    level: state.level
  }
}

export default connect(mapStateToProps, { setGameState, resetScore })(TimeUp)
