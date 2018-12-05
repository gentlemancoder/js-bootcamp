'use strict'

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? todos.parse(todosJSON) : []        
    } catch (error) {
        return []
    }
}

const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Removes todos from the array
const removeTodo =  (id) => {
    const todoIndex = todos.findIndex( (todo) => {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the todo by id
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    
    if (todo) {
        todo.done = !todo.done
    }
}

// Get the DOM elements for each note
const generateTodoDOM =  (todo) => {
    const todoElement = document.createElement('div')
    const todoTextEl = document.createElement('span')
    const checkboxEl = document.createElement('input')
    const buttonEl = document.createElement('button')

    //Setup checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.done
    todoElement.appendChild(checkboxEl)
    checkboxEl.addEventListener('change',(e) => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Set up todo text
    todoTextEl.textContent = todo.task
    todoElement.appendChild(todoTextEl)

    // Set up the remove button
    buttonEl.textContent = 'Delete'
    todoElement.appendChild(buttonEl)
    buttonEl.addEventListener('click',(e) => {
        removeTodo(todo.id)
        renderTodos(todos, filters)

    })
    return todoElement
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}

const renderTodos =  (todos, filters) => {

    const filteredTodos = todos.filter( (todo) => {
        const searchTextMatch = todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.done

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter( (todo) => !todo.done)

    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}