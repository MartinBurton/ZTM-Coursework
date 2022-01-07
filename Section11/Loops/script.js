var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study JavaScript",
    "eat healthy"
];

// for (let i = 0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";
// }

function logTodos(todo, i) {
    console.log(todo, i)
}

todos.forEach(logTodos);