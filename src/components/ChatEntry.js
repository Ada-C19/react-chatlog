import React from 'react';
import './ChatEntry.css';
import TimeStamp from './TimeStamp'

const ChatEntry = ({sender, body, timeStamp, id}) => {
  
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{ sender }</h2>
      <section className="entry-bubble">
        <p>{ body }</p>
        <p className="entry-time"><TimeStamp time={ timeStamp }/></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  id: PropTypes.number
};

export default ChatEntry;
