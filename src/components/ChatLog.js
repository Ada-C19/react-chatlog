import React from 'react';
import './ChatLog.css';
import ChatEntry from '../components/ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    return props.entries.map((message) => {
      return <ChatEntry   
        onLikeClicked={props.onLikeClicked} 
        sender={message.sender} 
        body={message.body} 
        timeStamp={message.timeStamp} 
        key={message.id} 
        id={message.id}
        liked={message.liked}
        />
    })
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLikeClicked: PropTypes.func,
};

export default ChatLog;