import React from 'react';
const ColorChoice = ({ setColorCallback, title, color }) => {
    const handleColorChange = (event) => {
        const color = event.target.value;
        setColorCallback(color);
    };
    return (
        <div>
        <label htmlFor="color-choice" className={color}>{title}</label>
        <select id="color-choice" onChange={handleColorChange}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
        </select>
        </div>
    );
};
export default ColorChoice;