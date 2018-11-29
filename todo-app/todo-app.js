const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// Listen for filter
document.querySelector('#search-todos').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        task :e.target.elements.newTodo.value,
        done: false})
     
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

 document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted =  e.target.checked
    renderTodos(todos, filters)
})
