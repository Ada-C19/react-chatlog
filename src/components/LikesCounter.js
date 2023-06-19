import React from 'react';

const LikesCounter = (props) => {

  const determineLikes = () => {
    let countLikes = 0
    for (let message of props.entries) {
      if (message.liked === true ) {
        countLikes = countLikes + 1
      }
    }
      
    console.log(countLikes)
    return countLikes;
  };
  return (
    <div>
      <h1>{determineLikes()} ❤️s</h1>
    </div>
  );
};

export default LikesCounter;
