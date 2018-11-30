const titleElement = document.querySelector('#note-title')
const timeElement = document.querySelector('#timestamp')
const bodyElement = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note) {
    return note.id === noteId
}) 

if (note === undefined) {
    location.assign('/index.html')
}

titleElement.value = note.title
timeElement.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
bodyElement.value = note.body


titleElement.addEventListener('input', function (e) { 
    note.title = e.target.value
    note.updatedAt = new Date().getTime()
    timeElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})


bodyElement.addEventListener('input', function (e) { 
    note.body = e.target.value
    note.updatedAt = new Date().getTime()
    timeElement.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeButton.addEventListener('click', function(e) {
    removeNote(noteId)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        let note = notes.find(function(note) {
            return note.id === noteId
        }) 
        
        if (note === undefined) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title
        timeElement.textContent = generateLastEdited(note.updatedAt)
        bodyElement.value = note.body
        
    }
})