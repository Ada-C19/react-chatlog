import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;


// const ChatEntry = (props) => {
//   return (
//     <div className="chat-entry local">
//       <h2 className="entry-name">Replace with name of sender</h2>
//       <section className="entry-bubble">
//         <p>Replace with body of ChatEntry</p>
//         <p className="entry-time">Replace with TimeStamp component</p>
//         <button className="like">🤍</button>
//       </section>
//     </div>
//   );
// };

// ChatEntry.propTypes = {
//   //Fill with correct proptypes
// };

// export default ChatEntry;
