import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  //learned another way to deconstruct 
  const { entries, redFilledHeartCount, setRedFilledHeartCount } = props;

  return (
    <div>
      {entries.map((data) => (
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
