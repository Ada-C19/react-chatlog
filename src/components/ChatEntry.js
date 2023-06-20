import React from 'react';
import PropTypes from 'prop-types';
import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import useSound from 'use-sound';

import bok from '../assets/bok.mp3';


const ChatEntry = ({sender, body, timeStamp, liked, id, likeMessage}) => {

  const [play] = useSound(bok);
  const buttonClass = liked ? 'liked' : 'notLiked';
  const heart = liked ? '🐣' : '🥚';
  const messageClass = sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className="chat-entry">
        <div className={messageClass}>
            <h2 className="entry-name">{sender}</h2>
            <section className="entry-bubble">
              <p>{body}</p>
              <div className="entry-time">
              <TimeStamp time={timeStamp}/>
              </div>
              <button className={`like ${buttonClass}`}
              onClick={() => {likeMessage(id); play()}}>{heart}</button>
            </section>
        </div>

    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  likeMessage : PropTypes.func,

};



export default ChatEntry;
