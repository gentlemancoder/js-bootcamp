
const todos = [{
    task: 'wake up',
    done: true
}, {
    task: 'get dressed',
    done: true
}, {
    task: 'eat breakfast',
    done: false
}, {
    task: 'go for a walk',
    done: true
}, {
    task: 'go to sleep',
    done: false
}]



const  sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (!a.done && b.done) {
            return -1
        } else if (!b.done && a.done ) {
            return 1
        } else {
            return 0
        }
        
    })
}

sortTodos(todos)
console.log(todos)


// const getThingsToDo = function (todos) {
//         return todos.filter(function (todo) {
//                 return !todo.done
//             })
//         }
        
        
//         console.log(getThingsToDo(todos))
        
//         const deleteTodo = function (todos, todoText) {
//             const index = todos.findIndex(function (todo) {
//                 return todo.text.toLowerCase() == todoText.toLowerCase()
//             })
            
//             if (index > -1) {
//                 todos.splice(index, 1)
//             }
//         }
