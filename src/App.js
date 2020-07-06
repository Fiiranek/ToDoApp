import React, {useState} from 'react';
import './App.css';
import Todo from './Todo'
import AddTodo from './AddTodo';

function App() {
  
  var todosLocalStorage = JSON.parse(localStorage.getItem("todos"))

  const getTodos = (todos) => {
    todos = JSON.parse(localStorage.getItem("todos"))
    if(todosLocalStorage == null) todosLocalStorage = []
  }

  const pushTodos = (newTodos) => {
    localStorage.setItem("todos",JSON.stringify(newTodos))
  }


   const [todos, setTodos] = useState(todosLocalStorage == null ? [] : todosLocalStorage)
  getTodos(todos)

  const addTodo = (title) => {
    const newTodos = [...todos,{title}];
    setTodos(newTodos);
    pushTodos(newTodos)
    getTodos(todos)
  }

  const finishTodo = (index) =>{
    const newTodos = [...todos]
    newTodos[index].finished = true
    setTodos(newTodos)
    pushTodos(newTodos)
    getTodos(todos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
    pushTodos(newTodos)
    getTodos(todos)
  }

  return (
    <div className="App">
      <h1>To Do App</h1>
      <div className="container">
<AddTodo addTodo={addTodo}/>
        {todos.map((todo,index) => (
        
          <Todo
            key={index}
            todo={todo}
            index={index}
            finishTodo={finishTodo}
             deleteTodo={deleteTodo}
          />  
          ))}
      </div>
      
    </div>
  );
}

export default App;
