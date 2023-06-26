import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
    const data = props.entries.map((entry, index) => {
        return (
            <li key={index}>
                <ChatEntry
                    body={entry.body}
                    sender={entry.sender}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    setLikes={props.setLikes}
                    id={entry.id}
                ></ChatEntry>
            </li>
        );
    });
    return (
        <div>
            <ul>
                {data}
            </ul>
        </div>

    );
};
ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        body: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired
    }))
};

export default ChatLog;
