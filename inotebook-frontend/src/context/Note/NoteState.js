import React, { useState } from 'react'
import NoteContext from './NoteContext'

function NoteState(props) {
  const host = "http://localhost:5000"
  const NoteInitial = []
  const [notes, setNotes] = useState(NoteInitial)

  // CRUD of notes
  // Add a note
  const addNote = async (title, description, tag) => {
    //using api call add the note
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZGNjY2JmODhmNGRjNmViMmRmMmU5In0sImlhdCI6MTY5NTQwMzIxMX0.6CyX-HiAM3z7kQwvTi4ShehGNbjG51gg34nWhGexbGQ"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const note = {
      "_id": "65bgtgfde44853ca47f113e4",
      "user": "650dcccbd88f4dc6eb2df2e9",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-09-23T11:43:23.999Z",
      "__v": 0
    }
    // setNotes(notes.push(note))
    // this push is giving me the error because push update the array but we want to concat the array element
    setNotes(notes.concat(note));
  }
  // get all note
  const GetAllNote = async () => {
    //using api call add the note
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZGNjY2JmODhmNGRjNmViMmRmMmU5In0sImlhdCI6MTY5NTQwMzIxMX0.6CyX-HiAM3z7kQwvTi4ShehGNbjG51gg34nWhGexbGQ"
      }
    });
    const jsonRes = await response.json()
    console.log(jsonRes);
  }

  // Delete a note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZGNjY2JmODhmNGRjNmViMmRmMmU5In0sImlhdCI6MTY5NTQwMzIxMX0.6CyX-HiAM3z7kQwvTi4ShehGNbjG51gg34nWhGexbGQ"
      },
    });
    const jsonRes = await response.json()
    console.log(jsonRes);

    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote)

  }
  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwZGNjY2JmODhmNGRjNmViMmRmMmU5In0sImlhdCI6MTY5NTQwMzIxMX0.6CyX-HiAM3z7kQwvTi4ShehGNbjG51gg34nWhGexbGQ"
      },
      body: JSON.stringify({ title, description, tag })
    });

    // client side changes
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tag = tag
      }
    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, GetAllNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
