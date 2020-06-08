import React from 'react'

const Header = () => {
  const colour = 'COLOUR'.split('')
  const colours = ['purple', 'red', 'yellow', 'black', 'blue', 'green']

  return (
    <div className='header-container'>
      <h1 className='title'>
        CLICK THE {colour.map((letter, index) =>
          <span key={index} className={colours[index]}>{letter}</span>)}
      </h1>
    </div>
  )
}
export default Header
