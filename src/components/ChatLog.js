import './ChatEntry.css'
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const Chatlog = ({entries, toggleLike}) => {
    const  getEntries = () => {
        return entries.map((entry, index) => {
        return (
            <ChatEntry 
            key={index}
            id={entry.id}
            sender={entry.sender} 
            body={entry.body}
            timeStamp={entry.timeStamp}
            liked={entry.liked}
            toggleLike={toggleLike}
            />
        );
    });
}
    return <main>
        <section className= 'chat-log'>
            {getEntries()}
        </section>
        </main>
};

Chatlog.propTypes = {
    entries: PropTypes.arrayOf (
        PropTypes.shape (
            {   
                sender: PropTypes.string.isRequired,
                body: PropTypes.string.isRequired,
                timeStamp: PropTypes.string.isRequired,
                liked: PropTypes.boo
            })
    ).isRequired,
    toggleLike: PropTypes.func.isRequired,
};

export default Chatlog;