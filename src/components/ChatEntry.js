import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  // console.log(chatMessages)
  // const senderPerson = props.sender.map()
  // const{sender, body, timestamp} = props;


  if (props.sender === 'Vladimir') {
    return (
      <div className="chat-entry local">
        {/* {props.name === 'Estragon && <div className="Estragon-right"></div>} */}
        {props.sender === 'Vladimir' && <h2 className="entry-name">{props.sender}</h2>}
        <section className="entry-bubble">
          <p>
            {props.body}
          </p>
          <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
          <button className="like">🤍</button>
        </section>
      </div>
    )
  } else {
    return (
      <div className="chat-entry remote">
        {props.sender === 'Estragon' && <h2 className="entry-name">{props.sender}</h2>}
        <section className="entry-bubble">
          <p>
            {props.body}
          </p>
          <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
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
