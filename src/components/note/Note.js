import {MdDeleteForever} from 'react-icons/md';
import './Note.css';

const Note = ({item, handleDeleteNote}) => {
    return (
        <div className='note'>
            <span>{item.text}</span>
            <div className='note-footer'>
                <small>{item.date}</small>
                <MdDeleteForever
                    onClick={() => handleDeleteNote(item.id)}
                    className='delete-icon'
                    size='1.3em'
                />
            </div>
        </div>
    );
};

export default Note;

