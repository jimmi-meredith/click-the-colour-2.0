import React from 'react'

import Header from './Header'
import LandingContent from './LandingContent'
import Game from './Game'

const Landing = () => {
  return (
    <>
    <Header />
    <div className='main-container'>
      {/* <LandingContent /> */}
      <Game />
    </div>
    </>
  )
}

export default Landing
