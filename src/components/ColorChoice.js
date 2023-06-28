import React from 'react';
const ColorChoice = ({ setColorCallback, title, color }) => {
    const handleColorChange = (selectedColor) => {
        // const color = event.target.value;
        setColorCallback(selectedColor);
    };

    return (
        <div>
            <label htmlFor='color-choice' className={color}>{title}</label>
                <div className='color-buttons'>
                    <button onClick={() => handleColorChange('red')}>
                    <span role='img' aria-label='red'>🔴</span>
                    </button>
                    <button onClick={() => handleColorChange('orange')}>
                    <span role='img' aria-label='orange'>🟠</span>
                    </button>
                    <button onClick={() => handleColorChange('yellow')}>
                    <span role='img' aria-label='yellow'>🟡</span>
                    </button>
                    <button onClick={() => handleColorChange('green')}>
                    <span role='img' aria-label='green'>🟢</span>
                    </button>
                    <button onClick={() => handleColorChange('blue')}>
                    <span role='img' aria-label='blue'>🔵</span>
                    </button>
                    <button onClick={() => handleColorChange('purple')}>
                    <span role='img' aria-label='purple'>🟣</span>
                    </button>
                </div>
        </div>
    );
};

export default ColorChoice;
