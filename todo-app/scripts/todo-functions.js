'use strict'

const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
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

const renderTodos =  (todos, filters) => {
    
    const filteredTodos = todos.filter( (todo) => {
        const searchTextMatch = todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.done

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter( (todo) => !todo.done)
    
    const todoEl = document.querySelector('#todos')
    todoEl.innerHTML = '';
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))
    
    if(incompleteTodos.length >= 1){
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = 'Nothing to do!'
        todoEl.appendChild(emptyMessage)
    }
}

// Get the DOM elements for each note
const generateTodoDOM =  (todo) => {
    const todoElement = document.createElement('label')
    const containerlEl = document.createElement('container');
    const todoTextEl = document.createElement('span')
    const checkboxEl = document.createElement('input')
    const buttonEl = document.createElement('button')

    //Setup checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.done
    containerlEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change',(e) => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Set up todo text
    todoTextEl.textContent = todo.task
    containerlEl.appendChild(todoTextEl)

    // Setup container
    todoElement.classList.add('list-item')
    containerlEl.classList.add('list-item__container')
    todoElement.appendChild(containerlEl)

    // Set up the remove button
    buttonEl.textContent = 'Delete'
    buttonEl.classList.add('button', 'button--text')
    todoElement.appendChild(buttonEl)
    buttonEl.addEventListener('click',(e) => {
        removeTodo(todo.id)
        renderTodos(todos, filters)
    })

    return todoElement
}

const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    const numOfTodos = incompleteTodos.length
    summary.classList.add('list-title')
    summary.textContent = `You have ${numOfTodos} todo${numOfTodos === 1 ? '': 's'} left`
    return summary
}
