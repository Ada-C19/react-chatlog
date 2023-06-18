import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((entry, index) =>{
        return(
            <div key={entry.id}>
                <ChatEntry
                  id = {entry.id}
                  sender = {entry.sender}
                  body = {entry.body}
                  timeStamp={entry.timeStamp}
                ></ChatEntry>
            </div>
        );
    });
    console.log(chatEntryComponents);
    return(
        <div className='chat-log' >
            {chatEntryComponents}
        </div>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired,
        })
    )
};

export default ChatLog;