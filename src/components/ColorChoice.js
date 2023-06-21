import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice = (props) => {
    return (
      <div>
        <h3>{props.user}'s color:</h3>
        <button>🔴</button>
        <button>🟠</button>
        <button>🟡</button>
        <button>🟢</button>
        <button>🔵</button>
        <button>🟣</button>
      </div>
    );
};
  

ColorChoice.propTypes = {
    setColorCallback: PropTypes.string.isRequired
};

export default ColorChoice;