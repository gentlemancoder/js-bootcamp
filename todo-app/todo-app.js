const todos = [{
    task: 'wake up',
    done: false
}, {
    task: 'get dressed',
    done: false
}, {
    task: 'eat breakfast',
    done: false
}, {
    task: 'go for a walk',
    done: false
}, {
    task: 'go to sleep',
    done: false
}]


const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.done
    })
    
    document.querySelector('#todos').innerHTML = '';
        
    const todosLeftAnnouncment = document.createElement('h2')
    todosLeftAnnouncment.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(todosLeftAnnouncment)
    
    filteredTodos.forEach(function (todo){
        const todoElement = document.createElement('p')
        todoElement.textContent = todo.task
        document.querySelector('#todos').appendChild(todoElement)
    })

    
}

renderTodos(todos, filters)


// Listen for new todo creation
document.querySelector('#new-todo-text').addEventListener('click', function(e){
    console.log('Add a new todo...')
})

// Listen for text change
document.querySelector('#add-todo').addEventListener('input', function(e){
    console.log(e.target.value)
})

// Listen for filter
document.querySelector('#search-todos').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)

})

// let undoneCount = 0
// todos.forEach(function(todo){
//     if (!todo.done)
//     undoneCount++
// })