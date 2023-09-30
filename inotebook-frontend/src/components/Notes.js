import React,{useContext,useEffect} from 'react'
import noteContext from '../context/Note/NoteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes,GetAllNote } = context
    
    useEffect(() => {
        GetAllNote()
      },[]);
    return (
        <div>
            <div className="yournotes">
                <h2 className='px-4 text-2xl'>Your Notes</h2>
                <div className="flex flex-wrap">
                    {notes.map((note) => {
                        return <NoteItem key={note._id} note={note} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Notes
