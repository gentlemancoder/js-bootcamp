'use strict'

const todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// Listen for filter
document.querySelector('#search-todos').addEventListener('input',(e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit',(e) =>{
    const task = e.target.elements.newTodo.value.trim()
    e.preventDefault()
    if(task.length > 0){
        todos.push({
            id: uuidv4(),
            task,
            done: false})
    }
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

 document.querySelector('#hide-completed').addEventListener('change',(e) =>{
    filters.hideCompleted =  e.target.checked
    renderTodos(todos, filters)
})
