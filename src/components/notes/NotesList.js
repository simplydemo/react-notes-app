import Note from '../note/Note';
import './NotesList.css';
import AddNote from "../note/AddNote";

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
    return (
        <div className='notes-list'>
            {notes.map((note) =>
                <Note key={note.id}
                      item={note}
                      handleDeleteNote={handleDeleteNote}
                />
            )}
            <AddNote handleAddNote={handleAddNote}/>
        </div>
    );
}
export default NotesList;

