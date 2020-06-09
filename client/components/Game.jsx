import React, { useState } from 'react'

const Game = () => {
  // useing react hooks to set the state of the timer
  // setTimer is used to set the state value of timer
  const [timer, setTimer] = useState(15)
  const [gameWord, setGameWord] = useState('')
  const colours = ['purple', 'red', 'yellow', 'black', 'blue', 'green']

  return (
    <div className='game-content'>
      <div className='timer'>
        {timer}
      </div>
      <div className='game-word'>
      </div>
      <div className='game-buttons'>
        <button>Black</button>
        <button>Blue</button>
        <button>Green</button>
        <button>Purple</button>
        <button>Red</button>
        <button>Yellow</button>
      </div>
    </div>
  )
}

export default Game
