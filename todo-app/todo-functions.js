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


const generateTodoDOM = function(todo) {
    const todoElement = document.createElement('p')
    todoElement.textContent = todo.task
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
