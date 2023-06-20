import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatList = ({messages, changeLiked}) => {
    const getChatComponents = (messages) => {
        return messages.map((chat) => {
            return (
                <ChatEntry
                key={chat.id}
                id={chat.id}
                sender={chat.sender}
                body={chat.body}
                timeStamp={chat.timeStamp}
                liked={chat.liked}
                changeLiked={changeLiked}
                /> 
        )
    })}

    return (
        <div>
            {getChatComponents(messages)}
        </div>
    )
}

ChatList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
            liked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    changeLiked: PropTypes.func.isRequired,
};

export default ChatList;