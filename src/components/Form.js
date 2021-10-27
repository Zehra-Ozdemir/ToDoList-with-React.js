import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {  // function Form() {}


    const inputTextHandler = (e) => {
        setInputText(e.target.value); // forma yazdığım inputu tek tek alıyor.
    };
    const submitTodoHandler = (e) => { 
        e.preventDefault(); // her bastığımda sayfa sıfırlanmasın
        setTodos([ // ...todos means if I had a todos already in the list just pass it
            /// ... üç noktayı koymadığımızda önce boş bir to do ekliyor.
            ...todos, {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText(""); // bununla birlikte her yeni butona basılıp to do eklendiğinde input box ın içi boşalıyor.
    };
    const statusHandler = (e) =>{
        setStatus(e.target.value);

    };
    return(
        <form>
            <input value = {inputText}
             onChange={inputTextHandler} 
             type="text"
             className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange = {statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );



}
export default Form;
