import React from 'react';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const { entries, redFilledHeartCount, setredFilledHeartCount } = props;
  return (
      <div>
      {entries.map((data) => (
          <ChatEntry
              key={data.id}
              sender={data.sender}
              body={data.body}
              timeStamp={data.timeStamp}
              redFilledHeartCount={redFilledHeartCount}
              setredFilledHeartCount={setredFilledHeartCount} />
      ))}
    </div>
  );
};

export default ChatLog;
