import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, toggleLiked}) => {
    const chatLogContent = entries.map((message) => {
        return (
            <ChatEntry 
            key={message.id}
            id={message.id} 
            sender={message.sender} 
            body={message.body} 
            timeStamp={message.timeStamp} 
            liked={message.liked}
            toggleLiked={toggleLiked} />
        );
    });

    return <main>
        {chatLogContent};
    </main>
}

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        sender: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        timeStamp: PropTypes.string.isRequired,
        liked: PropTypes.bool.isRequired,
    })).isRequired,
    toggleLiked: PropTypes.func,
}

export default ChatLog;