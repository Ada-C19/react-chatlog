import React from 'react';
import './ColorChoice.css'

const ColorChoice = ({ setColorCallback, sender }) => {
    return (
        <section>
            <p>{`${sender}'s Color:`}</p>
            <ul>
                <li onClick={() => setColorCallback(sender, 'red')}>🔴</li>
                <li onClick={() => setColorCallback(sender, 'orange')}>🟠</li>
                <li onClick={() => setColorCallback(sender, 'yellow')}>🟡</li>
                <li onClick={() => setColorCallback(sender, 'green')}>🟢</li>
                <li onClick={() => setColorCallback(sender, 'blue')}>🔵</li>
                <li onClick={() => setColorCallback(sender,'purple')}>🟣</li>
            </ul>

        </section>

    )
}

export default ColorChoice