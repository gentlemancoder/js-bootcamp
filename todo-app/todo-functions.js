const getSavedTodos = function() {
   
    if (localStorage.getItem('todos') !== null){
        return JSON.parse(localStorage.getItem('todos'))
    } else{
        return []
    }
}

const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Removes todos from the array
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Get the DOM elements for each note
const generateTodoDOM = function(todo) {
    const todoElement = document.createElement('div')
    const todoTextEl = document.createElement('span')
    const checkboxEl = document.createElement('input')
    const buttonEl = document.createElement('button')

    //Setup checkbox
    checkboxEl.setAttribute('type', 'checkbox')
    todoElement.appendChild(checkboxEl)

    // Set up todo text
    todoTextEl.textContent = todo.task
    todoElement.appendChild(todoTextEl)

    // Set up the remove button
    buttonEl.textContent = 'Delete'
    todoElement.appendChild(buttonEl)
    buttonEl.addEventListener('click', function (e) {
        removeTodo(todo.id)
        renderTodos(todos, filters)
    })
    return todoElement
    }

const generateSummaryDOM = function(){
    let todosAnnouncement = document.createElement('h2')
    if(filters.searchText === '' && !filters.hideCompleted){
        todosAnnouncement.textContent = `You have ${todos.length} things to do.`
    } else if(filters.searchText !== '' && !filters.hideCompleted) {
        todosAnnouncement.textContent = `You have ${filteredTodos.length} todos that match this search.`
    } else if(filters.hideCompleted){
        todosAnnouncement.textContent = `You have ${incompleteTodos.length} todos left to do.`
    }
    return todosAnnouncement
}

const renderTodos = function (todos, filters) {
    
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.done
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.done
    })
    
    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM())
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}
