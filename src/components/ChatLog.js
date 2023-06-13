import React from 'react';
import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatLogComponents = props.messagesData.map((message) => {
    return (
      <li>
        <ChatEntry>
          sender={message.sender}
          body={message.body}
          timeStamp=
        </ChatEntry>
      </li>
    )
  })





    return(
      <section>
        {chatLogComponents}
      </section>
)
}


