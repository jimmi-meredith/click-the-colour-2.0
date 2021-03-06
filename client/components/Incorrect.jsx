import React from 'react'
import { connect } from 'react-redux'

import { setGameState, resetScore } from '../actions'

const Incorrect = props => {
  const { setGameState, resetScore, score, level } = props

  const handleClick = () => {
    setGameState('game')
    resetScore()
  }

  return (
    <div className='incorrect'>
      <h1 className='heading'>Oops!</h1>
      <p className='score'>Your final score is {score}</p>
      <p className='level-text'>Your max level reached was {level}</p>
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

export default connect(mapStateToProps, { setGameState, resetScore })(Incorrect)
