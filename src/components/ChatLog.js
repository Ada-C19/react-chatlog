import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
    const chatLogContent = props.chatMessages.map((message) => {
        return (
            <ChatEntry sender={message.sender} body={message.body} timestamp={message.timeStamp} />
        );
    });

    return <main>
        {chatLogContent};
    </main>
}

export default ChatLog;