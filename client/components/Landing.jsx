import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Home from './Home'
import Game from './Game'
import Incorrect from './Incorrect'
import TimeUp from './TimeUp'

const Landing = props => {
  const { gameState } = props
  return (
    <>
    <Header />
    <div className='main-container'>

      {gameState === 'home' && <Home />}
      {gameState === 'game' && <Game />}
      {gameState === 'incorrect' && <Incorrect />}
      {gameState === 'timeUp' && <TimeUp />}

    </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState,
    score: state.score
  }
}

export default connect(mapStateToProps)(Landing)
