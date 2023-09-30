import React,{useContext} from 'react'
import noteContext from '../context/Note/NoteContext'
const NoteItem = (props) => {
    const context = useContext(noteContext)
    const { deleteNote } = context
    const { note } = props
    return (
        <>
            <div className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{note.tag}</h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">{note.title}</h1>
                    <p className="leading-relaxed mb-3">{note.description}</p>

                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                        <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                            <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
                        </span>
                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                            <i className="fa-solid fa-trash cursor-pointer" onClick={()=>{deleteNote(note._id)}}></i>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteItem
