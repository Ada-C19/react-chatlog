import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const { messages, redFilledHeartCount, setRedFilledHeartCount } = props;

  return (
    <div>
      {messages.map((data) => (
        <ChatEntry
          key={data.id}
          sender={data.sender}
          body={data.body}
          timeStamp={data.timeStamp}
          liked={data.liked}
          redFilledHeartCount={redFilledHeartCount}
          setRedFilledHeartCount={setRedFilledHeartCount}
        />
      ))}
    </div>
  );
};

export default ChatLog;
