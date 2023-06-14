import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatComp = props.entries.map((messages) => {
        return (
            <ChatEntry
                key={messages.id}
                sender={messages.sender}
                body={messages.body}
                timeStamp={messages.timeStamp}
                liked={messages.liked}
            />
        );
    });

    return (
        <div>
        {chatComp}
        </div>
    );
};

ChatLog.propTypes = {
    key: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
};

export default ChatLog;