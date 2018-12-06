import { getTodos, toggleTodo, saveTodos, removeTodo } from "./todos";
import { getFilters } from "./filters";

const renderTodos = () => {
    const todoEl = document.querySelector('#todos')    
    const filters = getFilters()
    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.done

        return searchTextMatch && hideCompletedMatch
    })
    const incompleteTodos = filteredTodos.filter((todo) => !todo.done)
    
    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))
    
    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'Nothing to do!'
        todoEl.appendChild(emptyMessage)
    }
}

const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkboxEl = document.createElement('input')
    const todoTextEl = document.createElement('span')
    const buttonEl = document.createElement('button')

    //Setup checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.done
    containerEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change', (e) => {
        toggleTodo(todo.id)
        renderTodos()
    })

    // Set up todo text
    todoTextEl.textContent = todo.task
    containerEl.appendChild(todoTextEl)

    // Setup container
    todoElement.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoElement.appendChild(containerEl)

    // Set up the remove button
    buttonEl.textContent = 'Delete'
    buttonEl.classList.add('button', 'button--text')
    todoElement.appendChild(buttonEl)
    buttonEl.addEventListener('click',(e) => {
        removeTodo(todo.id)
        renderTodos()
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

export { renderTodos, generateTodoDOM, generateSummaryDOM}