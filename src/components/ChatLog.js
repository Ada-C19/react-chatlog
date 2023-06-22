import React from 'react'
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

// const ChatLog = ({entries, onUpdateEntry}) => {
    const ChatLog = (props) => {
    // console.log({onUpdateEntry});

    // const chatComponents = entries.map((entry) => {
        const chatComponents = props.entries.map((entry, i) => {

        return (
            <li key={i} className="chat-log">
                <ChatEntry
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    onUpdate={props.onUpdateEntry}>
                </ChatEntry>
            </li>
        );

    });

    return (
        <section>
                {chatComponents}
        </section>
    )

};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })),
    onUpdateEntry: PropTypes.func.isRequired
};
export default ChatLog;