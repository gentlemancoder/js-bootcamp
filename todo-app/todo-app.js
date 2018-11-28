const todos = [{
    task: 'wake up',
    done: true
}, {
    task: 'get dressed',
    done: true
}, {
    task: 'eat breakfast',
    done: false
}, {
    task: 'go for a walk',
    done: true
}, {
    task: 'go to sleep',
    done: false
}]

 const summary = todos.filter(function (todo) {
    return !todo.done
})

const newParagraph = document.createElement('p')
newParagraph.textContent = `You have ${summary.length} todos left`
document.querySelector('body').appendChild(newParagraph)

summary.forEach(function(todo) {
    console.log('a')
    const newParagraph = document.createElement('p')
    newParagraph.textContent = todo.task
    document.querySelector('body').appendChild(newParagraph)
})

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('Add a new todo...')
})

document.querySelector('input#add-todo').addEventListener('input', function(e){
    console.log(e.target.value)
})


// let undoneCount = 0
// todos.forEach(function(todo){
//     if (!todo.done)
//     undoneCount++
// })