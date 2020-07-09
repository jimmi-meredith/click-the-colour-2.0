import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Home from './Home'
import Game from './Game'
import Incorrect from './Incorrect'
import TimeUp from './TimeUp'

const Landing = props => {
  // const { gameState } = props
  return (
    <>
    <Header />
    <div className='main-container'>

      {props.gameState === 'home' && <Home />}
      {props.gameState === 'game' && <Game />}
      {props.gameState === 'incorrect' && <Incorrect />}
      {props.gameState === 'timeUp' && <TimeUp />}

    </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    gameState: state.gameState
  }
}

export default connect(mapStateToProps)(Landing)
