import chatMessages from '../data/messages.json';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry.js';

const ChatList = ({messages, changeLiked}) => {
    const getChatComponents = (messages) => {
        messages.map((chat) => {
            return (
                <ChatEntry
                id={chat.id}
                sender={chat.sender}
                body={chat.body}
                timeStamp={chat.timeStamp}
                liked={chat.liked}
                changeLiked={changeLiked}
                /> 
        )
    })}

    const chatComponentsList = getChatComponents(messages)

    return (
        <div>
            {chatComponentsList}
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