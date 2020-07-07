import React from 'react'
import { connect } from 'react-redux'

import { setGameState, resetScore } from '../actions'

const Incorrect = props => {
  return (
    <div className='incorrect'>
      <h1 className='heading'>Oops!</h1>
      <p className='score'>Your final score is {props.score}</p>
      <button className='start-button' onClick={() => props.setGameState('game')}>Try Again</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    score: state.score
  }
}

export default connect(mapStateToProps, { setGameState, resetScore })(Incorrect)
