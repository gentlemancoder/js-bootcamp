import { renderTodos} from "./views";
import { setFilters } from "./filters";
import { loadTodos, createTodo } from "./todos";
import { timingSafeEqual } from "crypto";

renderTodos()

// Set up search text handler
document.querySelector('#search-todos').addEventListener('input',(e) => {
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

document.querySelector('#add-todo').addEventListener('submit',(e) => {
    const task = e.target.elements.newTodo.value.trim()
    if (task.length> 0){
        createTodo(task)
        renderTodos()
        e.target.elements.newTodo.value = ''
    }
})

// Set up checkbox handler
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})
// Bonus: Add a watcher for local storage

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {      
        loadTodos()
        renderTodos()
    }
})