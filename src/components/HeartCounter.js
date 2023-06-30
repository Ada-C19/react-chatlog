import '../App.css';

const HeartCounter = (props) => {

  return (
    <div>
      <p className='heartWidget'>
        💛 {props.likeTotal}
      </p>
    </div>
  );
};

export default HeartCounter;