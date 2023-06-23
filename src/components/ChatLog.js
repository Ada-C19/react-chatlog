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
        timeStamp: PropTypes.string.isRequired
    }))
};

export default ChatLog;
