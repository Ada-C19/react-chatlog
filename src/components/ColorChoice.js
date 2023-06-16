import './ColorChoice.css';
import { useState } from 'react';


const ColorChoice = ({ name, onColorClicked }) => {

    return (
        <div className='color-choice'>
            <p>{name}'s color</p>
            <div className='choices'>
                <span onClick={() => onColorClicked('red', name)}>🔴</span>
                <span onClick={() => onColorClicked('orange', name)}>🟠</span>
                <span onClick={() => onColorClicked('yellow', name)}>🟡</span>
                <span onClick={() => onColorClicked('green', name)}>🟢</span>
                <span onClick={() => onColorClicked('blue', name)}>🔵</span>
                <span onClick={() => onColorClicked('purple', name)}>🟣</span>
            </div>
        </div>
    )
};


export default ColorChoice;