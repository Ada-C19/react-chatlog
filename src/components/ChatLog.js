import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatComp = props.entries.map((messages) => {
        return (
            <ChatEntry
                key={messages.id}
                id={messages.id}
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
    messages: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
})),
onUpdateChat: PropTypes.func.isRequired
};
export default ChatLog;