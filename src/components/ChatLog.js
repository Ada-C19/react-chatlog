import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
    const chatEntryComponents = props.entries.map((entry, index) =>{
        // console.log('color:', props.senderColors[entry.sender])
        // console.log('Sender:', entry.sender)
        return(
            <div key={entry.id}>
                <ChatEntry
                  id = {entry.id}
                  sender = {entry.sender}
                  body = {entry.body}
                  timeStamp={entry.timeStamp}
                  liked = {entry.liked}
                  onLikeEntry = {props.onLikeEntry}
                  senderColors={props.senderColors} 
                  color= {props.senderColors[entry.sender]}
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
            liked: PropTypes.bool.isRequired,
            color: PropTypes.string
        })
    ),
    onLikeEntry: PropTypes.func.isRequired,
    senderColors: PropTypes.object,
};

export default ChatLog;