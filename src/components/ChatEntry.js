import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  let heartIcon = props.liked ? '❤️': '🤍'
  const side = props.sender === 'Vladimir' ? 'local' : 'remote'

  return  (
        <div className={`chat-entry ${side}`}>
        <h2>{props.sender}</h2>
        <section className="entry-bubble">
          <p>
            {props.body}
          </p>
          <p className="entry-time"><TimeStamp time={props.timeStamp}/></p>
            <button onClick={() => props.toggleLikes(props.id)} className="like">{heartIcon}</button>
        </section>
      </div>
  )
};


ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
  setEntries: PropTypes.func
};

export default ChatEntry;
