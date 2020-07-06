import React from 'react'

export default function Todo({todo, index, finishTodo, deleteTodo}) {
    return (
        <div className="todo"  style={{textDecoration: todo.finished ? "line-through" : "none"}}>
            {todo.title}
            <div>
                <button className="icon-button" onClick= {() => finishTodo(index)}>
                    <i className="fas fa-check last-icon finish"></i>
                </button>
                <button className="icon-button"  onClick= {() => deleteTodo(index)}>
                    <i className="fas fa-trash-alt  last delete"></i>
                </button>
                
            </div>
            
        </div>
    )
}
