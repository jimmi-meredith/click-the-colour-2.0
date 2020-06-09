import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setGameState } from '../actions'

const Game = props => {
  const colours = ['purple', 'red', 'yellow', 'black', 'blue', 'green']
  // useing react hooks to set the state of the timer
  // setTimer is used to set the state value of timer
  const [timer, setTimer] = useState(15)
  const [gameWord, setGameWord] = useState('')
  const [wordColour, setWordColour] = useState('')

  function getRandomNumber (array) {
    return Math.floor(Math.random() * array.length)
  }

  function getGameWord (event = null) {
    if (event) {
      // changes gameState in the redux store if the player picks a wrong colour
      if (event.target.innerText !== wordColour) {
        return props.setGameState('fail')
      }
    }
    let randomWord = colours[getRandomNumber(colours)]
    getWordColour(randomWord)
  }

  function getWordColour (word) {
    let newColours = colours.filter(colour => colour !== word)
    setWordColour(newColours[getRandomNumber(newColours)])
    setGameWord(word)
  }

  // timer counting down from 15 and updating the timer in state at the same time
  function startTimer () {
    setTimeout(() => {
      let gameTime = timer - 1
      if (gameTime >= 0) {
        setTimer(gameTime)
      }
    }, 1000)
  }

  // useEffect is effectively componentDidMount and componentDidUpdate combined
  useEffect(() => {
    getGameWord()
    // the array is telling useEffect that it only needs to run once
  }, [])

  // timer starts when component loads
  useEffect(() => {
    startTimer()
  }, [timer])

  return (
    <div className='game-content'>
      <div className='timer'>
        {timer}
      </div>
      <div className={wordColour}>
        {gameWord}
      </div>
      <div className='game-buttons'>
        {colours.map(colour => <button key={colour} onClick={getGameWord}>{colour}</button>)}
      </div>
    </div>
  )
}

// passing setGameState directly as an object instead of using mapDispatchToProps
export default connect(null, { setGameState })(Game)
