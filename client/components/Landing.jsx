import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import LandingContent from './LandingContent'
import Game from './Game'

const Landing = props => {
  return (
    <>
    <Header />
    <div className='main-container'>

      {props.gameState === 'home' && <LandingContent />}
      {props.gameState === 'game' && <Game />}

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
