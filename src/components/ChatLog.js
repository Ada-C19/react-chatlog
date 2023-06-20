import './ChatLog.css';
import ChatEntry from './ChatEntry';


const ChatLog = (props) => {
    const chatComponents = entries => (entries.map(entry => {
        return (
            <li>
                <ChatEntry
                id={entry.id}
                sender={entry.sender}
                body={entry.body}
                timeStamp={entry.timeStamp}
                liked={entry.liked}
                updateHeart={props.updateHeart}
                />
            </li>
        );
    }));

    return (
        <section>
            <h2>Chat Log</h2>
            <ul>
                {chatComponents(props.entries)}
            </ul>
        </section>
    );
};


// ChatLog.propTypes = {
//     messages: PropTypes.arrayOf(PropTypes.shape({
//         id: Number.isRequired,
//         sender: String.isRequired,
//         body: String.isRequired, 
//         timeStamp: DateTime.isRequired,
//         liked: Boolean.isRequired,
//     }))
// };


export default ChatLog; 

