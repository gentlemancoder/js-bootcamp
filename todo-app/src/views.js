import { getFilters } from "./filters";
import { getTodos } from "./todos";

getTodos()
const renderTodos =  () => {
    getFilters()
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
        saveTodos()
        renderTodos()
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