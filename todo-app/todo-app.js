const todos = [{
    task: 'wake up',
    done: true
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
    searchText: '',
    hideCompleted: false
}



const renderTodos = function (todos, filters) {
    
    let filteredTodos = todos.filter(function (todo) {
        return todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    filteredTodos = filteredTodos.filter(function (todo){
        return !filters.hideCompleted || todo.done
        // if (filters.hideCompleted){
        //     return !todo.done
        // } else {
        //     return true
        // }
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.done
    })
  
    
    document.querySelector('#todos').innerHTML = '';
    
    if(filters.searchText === '' && !filters.hideCompleted){
        const unfilteredTodosAnnouncment = document.createElement('h2')
        unfilteredTodosAnnouncment.textContent = `You have ${todos.length} things to do.`
        document.querySelector('#todos').appendChild(unfilteredTodosAnnouncment)
    } else if(filters.searchText !== '' && !filters.hideCompleted) {
        const filteredTodosAnnouncment = document.createElement('h2')
        filteredTodosAnnouncment.textContent = `You have ${filteredTodos.length} todos that match this search.`
        document.querySelector('#todos').appendChild(filteredTodosAnnouncment)
    } else if(filters.hideCompleted){
        const todosLeftAnnouncment = document.createElement('h2')
        todosLeftAnnouncment.textContent = `You have ${incompleteTodos.length} todos left todo`
        document.querySelector('#todos').appendChild(todosLeftAnnouncment)
    }
    
    filteredTodos.forEach(function (todo){
    const todoElement = document.createElement('p')
    todoElement.textContent = todo.task
    document.querySelector('#todos').appendChild(todoElement)
    })
    
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
        task :e.target.elements.newTodo.value,
        done: false})
        renderTodos(todos, filters)
        e.target.elements.newTodo.value = ''
})

 document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted =  e.target.checked
    renderTodos(todos, filters)
})
