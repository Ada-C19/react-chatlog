// {
//     "id": 1,
//     "sender": "Vladimir",
//     "body": "why are you arguing with me",
//     "timeStamp": "2018-05-29T22:49:06+00:00",
//     "liked": false
//   },
import React from "react";
import ChatEntry from "./ChatEntry";
import PropTypes from 'prop-types';

const ChatLog = ({ entries }) => {

    const getChatLogJSX = (chatLog) => {
        chatLog.map((indvChat, index) => {
            return (
                <ChatEntry
                    id={indvChat.id}
                    sender={indvChat.sender}
                    body={indvChat.body}
                    timeStamp={indvChat.timeStamp}
                    liked={indvChat.liked}
                    key={index}
                />
            )
        });

    }

    return (
        <div>
            <p>
                {getChatLogJSX(entries)}
            </p>
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


    })).isRequired
}

export default ChatLog;