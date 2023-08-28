import {useEffect, useState} from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/notes/NotesList";
import SearchBar from "./components/notes/SearchBar";
import Header from "./components/header/Header";

const App = () => {

    const [notes, setNotes] = useState([
        // {
        //     id: nanoid(),
        //     text: 'This is my first note!',
        //     date: '15/04/2021'
        // },
        // {
        //     id: nanoid(),
        //     text: 'This is my second note!',
        //     date: '21/04/2021'
        // },
        // {
        //     id: nanoid(),
        //     text: 'This is my third note!',
        //     date: '28/04/2021'
        // },
        // {
        //     id: nanoid(),
        //     text: 'This is my new note!',
        //     date: '30/04/2021'
        // }
    ]);

    useEffect(() => {
        const savedNotes = JSON.parse(
            localStorage.getItem("react-notes-app-data")
        );

        if (savedNotes) {
            setNotes(savedNotes);
        }
    }, []);

    useEffect(() => {
        console.log('notes.length: ' + notes.length);
        if (notes.length > 0) {
            localStorage.setItem(
                'react-notes-app-data',
                JSON.stringify(notes)
            );
        }
    }, [notes]);

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes)
        console.log(text);
    }

    const deleteNote = (id) => {
        const delNotes = notes.filter((note) => note.id !== id);
        setNotes(delNotes);
    }


    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState('');

    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className='container'>
                <Header handleToggleDarkMode={setDarkMode}/>
                <SearchBar handleSearchNote={setSearchText}/>
                <NotesList
                    notes={notes.filter((note) =>
                        note.text.toLowerCase().includes(searchText)
                    )}
                    handleAddNote={addNote}
                    handleDeleteNote={deleteNote}
                />
            </div>
        </div>
    );
}

export default App;
