const mongoose = require("mongoose")
const { Schema } = mongoose

const NotesSchema = new Schema({
    // have to do something such that all the user can't see the notes of the other user only that user can see the notes of it's own
    user: {
        // if i compare with the sql then it is similar to the foreign key
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('notes', NotesSchema)