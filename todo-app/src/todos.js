import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = []

const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (error) {
        todos = []
    }
}

const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos 

const createTodo = (task) => {
    if(task.length > 0){
        todos.push({
            id: uuidv4(),
            task,
            done: false})
    }
    saveTodos()

} 

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos()
    }
}

const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    
    if (todo) {
        todo.done = !todo.done
    }
    saveTodos()
}

loadTodos()

export { loadTodos, getTodos, removeTodo, toggleTodo, createTodo }