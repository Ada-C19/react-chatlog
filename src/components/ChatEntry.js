import React, {useState} from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const [heart, setHeart] = useState(props.entry.liked)
  // console.log(chatMessages)
  // const senderPerson = props.entry.sender.map()
  // const{sender, body, timestamp} = props;
  
  const changeHeart = () => {
    setHeart(prevHeart => !prevHeart)
  }

  let heartIcon = heart ? '❤️': '🤍'
  
  // }
  if (props.entry.sender === 'Vladimir') {
    return (
      <div className="chat-entry local">
        {/* {props.entry.name === 'Estragon && <div className="Estragon-right"></div>} */}
        {props.entry.sender === 'Vladimir' && <h2 className="entry-name">{props.entry.sender}</h2>}
        <section className="entry-bubble">
          <p>
            {props.entry.body}
          </p>
          <p className="entry-time"><TimeStamp time={props.entry.timeStamp}/></p>
          <button onClick={changeHeart} className="like">{heartIcon}</button>
        </section>
      </div>
      )
  } else {
    return (
      <div className="chat-entry remote">
        {props.entry.sender === 'Estragon' && <h2 className="entry-name">{props.entry.sender}</h2>}
        <section className="entry-bubble">
          <p>
            {props.entry.body}
          </p>
          <p className="entry-time"><TimeStamp time={props.entry.timeStamp}/></p>
          <button onClick={changeHeart} className="like">{heartIcon}</button>
        </section>
      </div>
  )};
};


// ChatEntry.propTypes = {
//   id: PropTypes.number.isRequired,
//   sender: PropTypes.string.isRequired,
//   body: PropTypes.string.isRequired,
//   timestamp: PropTypes.string.isRequired,
//   liked:PropTypes.bool.isRequired
// };

export default ChatEntry;
