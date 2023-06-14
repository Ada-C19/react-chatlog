import messages from '../data/messages.json';
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

export default ChatLog;