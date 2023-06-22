
import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onChangeLike, changeHeartColor, buttonShape }) => {

    const getChatLogJSX = (chatLog) => {
        return chatLog.map((indvChat) => {
            return (
                <ChatEntry
                    id={indvChat.id}
                    sender={indvChat.sender}
                    body={indvChat.body}
                    timeStamp={indvChat.timeStamp}
                    liked={indvChat.liked}
                    key={indvChat.id}
                    onChangeLike={onChangeLike}
                    entries={entries}
                />
            )
        });
    }

    return (
        <div>
            <section>
                {getChatLogJSX(entries)}
            </section>
        </div>
    )
}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })).isRequired,
    onChangeLike: PropTypes.func.isRequired,

}

export default ChatLog;