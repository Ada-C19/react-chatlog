import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = ({ entries, localColor, localSender, remoteColor, pressLike }) => {
    return (
        <div>
            {entries.map((entry) => (
                <ChatEntry
                    id={entry.id}
                    sender={entry.sender}
                    body={entry.body}
                    timeStamp={entry.timeStamp}
                    liked={entry.liked}
                    changeLike={pressLike}
                    localColor={localColor}
                    remoteColor={remoteColor}
                    localSender={localSender}
                />
            ))}
        </ div >
    )
};


ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked:PropTypes.bool.isRequired
        })
    ),
    localColor: PropTypes.string,
    localSender: PropTypes.string,
    remoteColor: PropTypes.string,
    changeLike: PropTypes.func
}

export default ChatLog;
