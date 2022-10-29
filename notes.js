const fs = require('fs')

// Function for reading the data from notes-data.json
var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json')
        return JSON.parse(noteString)
    } catch (e) {
        return []
    }
}

// Function for saving the data in notes-data.json
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

// Function for adding new  data in notes-data.json
var addNotes = (title, body) => {
    var notes = fetchNotes()
    var note = {
        title, body
    }
    var duplicateNotes = notes.filter((note) => {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push(note)
        saveNotes(notes)
        return note;
    }
}

// Function for reading the data from notes-data.json by title
var getNote = (title) => {
    var notes = fetchNotes();
    var filterdNotes = notes.filter((note) => {
        return note.title === title
    });
    return filterdNotes[0];
}


// Function for removing the data from notes-data.json
var removeNote = (title) => {
    var notes = fetchNotes()
    var filterdNotes = notes.filter((note) => {
        return note.title !== title
    })
    saveNotes(filterdNotes)
    return notes.length !== filterdNotes.length
}

// Function for reading whole  data from notes-data.json
var readNotes = () => {
    var notes = fetchNotes()
    return notes;
}


// Exporting all the functions
module.exports = {
    addNotes,
    getNote,
    removeNote,
    readNotes,
}