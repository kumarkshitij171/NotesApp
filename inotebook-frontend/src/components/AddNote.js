import React, { useContext, useState } from 'react'
import noteContext from '../context/Note/NoteContext'

const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context
    const [note,setNote]= useState({"title":"","description":"","tag":""})

    const onChange = (e)=>{
        // setting up the value realtime in the variable using a spread operator - it allow to concatate the variable that we have a note initially and after that the notes variable changes
        setNote({...note,[e.target.name]:e.target.value})
    }

    const handleNote =(e)=>{
        e.preventDefault()
        // adding that note
        addNote(note.title,note.description,note.tag);
    }
    return (
        <>
            <div className="mx-6 my-3 h-[35vw]">
                <div className="mb-6 ">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="title" name='title' className="block w-[50%] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={onChange} />
                </div>
                <div className="mb-6 ">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" id="description" name='description' className="block w-[50%] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange}/>
                </div>
                <div className="mb-6 ">
                    <label htmlFor="tag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
                    <input type="text" id="tag" name='tag' className="block w-[50%] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange} />
                </div>
                <a href="/"><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleNote}>Add Note</button></a>
            </div>
        </>
    )
}

export default AddNote
