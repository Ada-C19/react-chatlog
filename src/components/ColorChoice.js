import React from 'react';
import PropTypes from 'prop-types';

const ColorChoice = (props) => {
    return (
      <div>
        <h3>{props.user}'s color:</h3>
        <button onClick={() => {props.changeColor(props.user, 'red')}}>🔴</button>
        <button onClick={() => {props.changeColor(props.user, 'orange')}}>🟠</button>
        <button onClick={() => {props.changeColor(props.user, 'yellow')}}>🟡</button>
        <button onClick={() => {props.changeColor(props.user, 'green')}}>🟢</button>
        <button onClick={() => {props.changeColor(props.user, 'blue')}}>🔵</button>
        <button onClick={() => {props.changeColor(props.user, 'purple')}}>🟣</button>
      </div>
    );
};

ColorChoice.propTypes = {
    user: PropTypes.string.isRequired,
    changeColor: PropTypes.func.isRequired
};

export default ColorChoice;