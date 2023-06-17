import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

// const CHATDATA = [
//   {
//     id: 1,
//     sender: 'Vladimir',
//     body: 'why are you arguing with me',
//     timeStamp: '2018-05-29T22:49:06+00:00',
//     liked: false,
//   },
// ];

const ChatEntry = (props) => {
  // const chatDataJSX= props.chatData.map(entry = )

  // console.log('in ChatEntry', props.chatData.sender);

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          {' '}
          <TimeStamp time={props.timeStamp} />{' '}
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
};

export default ChatEntry;
