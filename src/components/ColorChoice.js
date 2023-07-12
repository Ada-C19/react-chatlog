import React from 'react';
import './ColorChoice.css'

const ColorChoice = props => {
  return (
  <div className={props.className === 'left' ? 'buttons left': 'buttons right'}>
    <button className='red-button'></button>
    <button className='orange-button'></button>
    <button className='yellow-button'></button>
    <button className='green-button'></button>
    <button className='blue-button'></button>
    <button className='purple-button'></button>
  </div>)
}

export default ColorChoice;