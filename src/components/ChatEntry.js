import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // console.log(chatMessages)
  // const senderPerson = props.entries.sender.map()
  // const{sender, body, timestamp} = props;


  if (props.entries.sender === 'Vladimir') {
    return (
      <div className="chat-entry local">
        {/* {props.entries.name === 'Estragon && <div className="Estragon-right"></div>} */}
        {props.entries.sender === 'Vladimir' && <h2 className="entry-name">{props.entries.sender}</h2>}
        <section className="entry-bubble">
          <p>
            {props.entries.body}
          </p>
          <p className="entry-time"><TimeStamp time={props.entries.timeStamp}/></p>
          <button className="like">🤍</button>
        </section>
      </div>
      )
  } else {
    return (
      <div className="chat-entry remote">
        {props.entries.sender === 'Estragon' && <h2 className="entry-name">{props.entries.sender}</h2>}
        <section className="entry-bubble">
          <p>
            {props.entries.body}
          </p>
          <p className="entry-time"><TimeStamp time={props.entries.timeStamp}/></p>
          <button className="like">🤍</button>
        </section>
      </div>
  )};
};


ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired
};

export default ChatEntry;
