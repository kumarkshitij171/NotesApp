// import React, { useContext } from 'react'
// import noteContext from '../context/Note/NoteContext'
import Notes from './Notes'
import AddNote from './AddNote'
function Home() {
    // const context = useContext(noteContext)
    // const { notes } = context

    return (
        <>
            <AddNote />
            <Notes />
        </>
    )
}

export default Home