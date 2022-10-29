// Auther : Abhijit Patil                     Date : 29/10/2022
// Requiring all the neccesary  modules
const _ = require('lodash')
const yargs = require('yargs')
const notes = require('./notes')
console.log('------------------------')
console.log('Starting user input')
console.log('------------------------')
const argv = yargs.argv
var command = argv._[0]
console.log('-----------------------------------')
console.log('The Command is : -', command)
console.log('-----------------------------------')

switch (command) {
    case 'add':
        var note = notes.addNotes(argv.title, argv.body)
        if (note) {
            console.log('-----------------------')
            console.log("Note created")
            console.log("Title is ", note.title)
            console.log("Body is ", note.body)
            console.log('-----------------------')
        } else {
            console.log('---------------------')
            console.log('Note title exists')
            console.log('---------------------')
        }
        break;
    case 'list':
        
        var count = 1
        var note = notes.readNotes()
        console.log('------------------------------------------')
        console.log(`Printing Total ${note.length} Note(s):`)
        console.log('------------------------------------------')

        note.forEach(element => {
            console.log('Note :', count)
            console.log('Title :-', element.title)
            console.log('Body :-', element.body)
            console.log('------------------------------------------')
            count++;

        });
        break;
    case 'remove':
        console.log(' remove')
        var noteRemoved = notes.removeNote(argv.title)
        var msg = noteRemoved ? 'Note was removed succesfully' : 'Note not found'
        console.log('---------------------------------------')
        console.log(msg)
        console.log('------------------------------------------')

        break;
    case 'read':

        var note = notes.getNote(argv.title)

        if (note) {
            console.log('------------------------------')
            console.log(' note found')
            console.log(' Title is :-', note.title)
            console.log(' Body is :-', note.body)
            console.log('------------------------------')
        } else {
            console.log('------------------------')
            console.log('title not found')
            console.log('------------------------')
        }
        break;
    default:
        console.log('----------------------------------')
        console.log('Command not recognised')
        console.log('----------------------------------')
}