const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
},{
    title: "Habits to work on",
    body: 'Exercise. Eating a bit better.'
},{
    title: 'Office Modification',
    body: 'Get a new seat'
}]

const filters = {}

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'  
})

document.querySelector('#remove-all').addEventListener('click', function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })    
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})

// -- Single --
// p
// #replace
// .item

// Multiple
// p#order
// button.inventory
// h#title.application
// h1.application#title





















// DOM - Document Object Model

// Query all and remove
// const p =document.querySelector('p')
// console.log(p)

// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//     p.textContent = '*** *** ***'
//     // console.log(p.textContent)
//     // p.remove()
// })

// // Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)