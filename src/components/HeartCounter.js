import '../App.css';
import PropTypes from 'prop-types';

const HeartCounter = (props) => {

  return (
    <div>
      <p className='heartWidget'>
       ❤️ {props.likeTotal}
      </p>
    </div>
  );
};

HeartCounter.propTypes = {
  likeTotal: PropTypes.number.isRequired,
};

export default HeartCounter;