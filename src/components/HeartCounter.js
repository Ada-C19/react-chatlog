import '../App.css';

const HeartCounter = () => {
  const printMessage = () => {
    console.log('Hello?? can\'t a program count hearts in peace??');
  };

  return (
    <div>
      <br></br>
      <p className='heartWidget'>
        shout out to a certain amount of likes clicked
      </p>
      <button onClick={printMessage}>hello!</button>
    </div>
  );
};

export default HeartCounter;