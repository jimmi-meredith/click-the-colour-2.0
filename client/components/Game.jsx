import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { setGameState, updateScore, updateLevel } from '../actions'

const Game = props => {
  const colours = ['purple', 'red', 'yellow', 'black', 'blue', 'green']
  // useing react hooks to set the state of the timer
  // setTimer is used to set the state value of timer
  const [timer, setTimer] = useState(15)
  const [gameWord, setGameWord] = useState('')
  const [wordColour, setWordColour] = useState('')

  // gets a random number between 0 & 5
  function getRandomNumber (array) {
    return Math.floor(Math.random() * array.length)
  }

  // generates a random word to display for the game
  // takes an event which has a defult of null
  function getGameWord (event = null) {
    // if an event exists then this happens
    if (event) {
      if (event.target.innerText === wordColour) {
        props.updateScore()
      }
      // changes gameState in the redux store if the player picks a wrong colour
      if (event.target.innerText !== wordColour) {
        props.setGameState('incorrect')
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
      if (gameTime === 0) {
        props.setGameState('timeUp')
        increaseLevel(props.score)
      }
    }, 1000)
  }

  function increaseLevel (score) {
    if (score >= 7) {
      props.updateLevel()
    }
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
      <div className='level'>
        Level {props.level}
      </div>
      <div className='timer'>
        {timer}
      </div>
      <div id='game-word' className={wordColour}>
        {gameWord}
      </div>
      <div className='game-buttons'>
        {colours.map(colour => <button key={colour} className='colour-button' onClick={getGameWord}>{colour}</button>)}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    score: state.score,
    level: state.level
  }
}

// passing setGameState directly as an object instead of using mapDispatchToProps
export default connect(mapStateToProps, { setGameState, updateScore, updateLevel })(Game)
