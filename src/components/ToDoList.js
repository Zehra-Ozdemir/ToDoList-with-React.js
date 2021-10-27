import React from "react";
import Todo from './Todo';
const ToDoList = ({todos, setTodos, filteredTodos}) => {
    
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (    // for i in list gibi düşün. todo burda döngünün içindeki değişken adı.
                    <Todo 
                    setTodos = {setTodos} 
                    todos = {todos}
                    todo = {todo}
                    key = {todo.id} 
                    text={todo.text}/>
                ))}
            </ul>
        </div>
      


    );
}
export default ToDoList;