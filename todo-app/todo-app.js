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

// Starts
const summary = todos.filter(function (todo) {
    return !todo.done
})

const todosLeftAnnouncment = document.createElement('h2')
todosLeftAnnouncment.textContent = `You have ${summary.length} todos left`
document.querySelector('body').appendChild(todosLeftAnnouncment)

summary.forEach(function(todo) {
    console.log('a')
    const p = document.createElement('p')
    p.textContent = todo.task
    document.querySelector('body').appendChild(p)
})

// Ends

// Listen for new todo creation
document.querySelector('#new-todo-text').addEventListener('click', function(e){
    console.log('Add a new todo...')
})

document.querySelector('#add-todo').addEventListener('input', function(e){
    console.log(e.target.value)
})


// let undoneCount = 0
// todos.forEach(function(todo){
//     if (!todo.done)
//     undoneCount++
// })