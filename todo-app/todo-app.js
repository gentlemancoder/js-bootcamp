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

//

// Listen for filter
document.querySelector('#search-todos').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        task :e.target.elements.newTodo.value,
        done: false})
        renderTodos(todos, filters)
        e.target.elements.newTodo.value = ''
})