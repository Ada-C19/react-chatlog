import './ColorChoice.css';


const ColorChoice = ({ name, onColorClicked, textColor, names }) => {
    const textColorClass = name === names[0] ? textColor[names[0]] : textColor[names[1]];
    return (
        <div className='color-choice'>
            <p className={textColorClass}>{name}'s color</p>
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