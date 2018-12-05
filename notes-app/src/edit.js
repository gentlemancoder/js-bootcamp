import { initializeEditPage, generateLastEdited } from "./views";
import { updateNote, removeNote } from "./notes";

const titleElement = document.querySelector('#note-title')
const timeElement = document.querySelector('#timestamp')
const bodyElement = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)

initializeEditPage(note)

titleElement.addEventListener('input',(e) => { 
    const note = updateNote(id, {
        title: e.target.value
    })
    timeElement.textContent = generateLastEdited(note.updatedAt)
})


bodyElement.addEventListener('input',(e) => { 
    const note = updateNote(id, {
        body: e.target.value
    })
    timeElement.textContent = generateLastEdited(note.updatedAt)
})

removeButton.addEventListener('click',(e) => {
    removeNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage',(e) =>{
    if (e.key === 'notes'){
        initializeEditPage(noteId)    
    }
})