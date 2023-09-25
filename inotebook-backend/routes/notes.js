const express = require("express")
const router = express.Router()
const { body, validationResult } = require('express-validator');
const fetchUser = require("../middleware/fetchUser");
const Note = require("../models/Note");

//! Route 1: Fetching all the notes of that particular user: GET "/api/notes/fetchallnotes " Login required! so for login we uses fetchuser
router.get('/fetchallnotes', fetchUser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }
})

//! Route 2: Adding a note " Login required! POST request : /api/notes/addnote
router.post('/addnote', fetchUser, [
    //* while adding the notes we are ensuring that the note will not be empty so adding a validation check as same done in auth

    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description should be contains atleast 5 character').isLength({ min: 5 })
],
    async (req, res) => {
        try {
            const { title, description, tag } = req.body

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            // Create a new Note instance
            const note = new Note({
                title,
                description,
                tag,
                user: req.user.id
            })

            const savedNote = await note.save()
            res.json(savedNote)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    })


//! Route 3: update an existing note " Login required! PUT request : /api/notes/updatenote/:id
//* we can use post request instead of put request no problem in that 
router.put('/updatenote/:id', fetchUser, [
    //* while adding the notes we are ensuring that the note will not be empty so adding a validation check as same done in auth

    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'description should be contains atleast 5 character').isLength({ min: 5 })
],
    async (req, res) => {
        const { title, description, tag } = req.body
        try {
            // checking the user is updating the note is access to it's own note and it is a valid user or not
            let noteUser = await Note.findById(req.params.id)
            if (!noteUser) {
                // not a valid user
                return res.status(401).send("Not found")
            }

            if (noteUser.user.toString() !== req.user.id) {
                // user kisi aur ka note ko acesss krne ka kosish kr rha h 
                return res.status(404).send("Not allowed")
            }
            // Now the user is valid and now Find the note that have to be update
            // create a new note object and update it
            const newnote = {}
            if (title) { newnote.title = title }
            if (description) { newnote.description = description }
            if (tag) { newnote.tag = tag }

            noteUser = await Note.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })

            res.json({ noteUser })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    })

//! Route 4: Delete the note " Login required! DELETE request : /api/notes/deletenote/:id
//* we can use post request no problem in that 
router.delete('/deletenote/:id', fetchUser,
    async (req, res) => {
        const { title, description, tag } = req.body
        try {

            // checking the user is Deleting the note is access to it's own note and it is a valid user or not
            let noteUser = await Note.findById(req.params.id)
            if (!noteUser) {
                // not a valid user
                return res.status(401).send("Not found")
            }

            if (noteUser.user.toString() !== req.user.id) {
                // user kisi aur ka note ko delete krne ka kosish kr rha h 
                return res.status(404).send("Not allowed")
            }
            // Now the user is valid and now Find the note that have to be delete

            noteUser = await Note.findByIdAndDelete(req.params.id)

            res.json({ "Sucess": `Note deleted sucessfully with id ${req.params.id}` })
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error Occured")
        }
    })

module.exports = router