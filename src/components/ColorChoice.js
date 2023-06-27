import React, { useState } from 'react';

const ColorChoice = (props) => {
  const [color, setColor] = useState('#000000'); 

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    props.setColorCallback(selectedColor);
  };

  return (
    <div className="color-choice">
      <h3>Select Color:</h3>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorChoice;
