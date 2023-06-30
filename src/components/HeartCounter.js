import '../App.css';

const HeartCounter = (props) => {
  const printMessage = (name) => {
    console.log(`Hello {name}?? can\'t a program count hearts in peace??`);
    console.log('event details:', name);
  };

  return (
    <div>
      <p className='heartWidget'>
        💛 {props.likeTotal}
      </p>
    </div>
  );
};

export default HeartCounter;