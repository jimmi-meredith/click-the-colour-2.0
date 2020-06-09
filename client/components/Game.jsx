import React, { useState } from 'react'

const Game = () => {
  const colours = ['purple', 'red', 'yellow', 'black', 'blue', 'green']
  // useing react hooks to set the state of the timer
  // setTimer is used to set the state value of timer
  const [timer, setTimer] = useState(15)
  const [gameWord, setGameWord] = useState('')
  const [wordColour, setWordColour] = useState('')

  function getRandomNumber (array) {
    return Math.floor(Math.random() * array.length)
  }

  function getGameWord () {
    let wordWord = colours[getRandomNumber(colours)]
    getWordColour(wordWord)
  }

  function getWordColour (word) {
    let newColours = colours.filter(colour => colour !== word)
    setWordColour(newColours[getRandomNumber(newColours)])
    setGameWord(word)
  }

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

export default Game
