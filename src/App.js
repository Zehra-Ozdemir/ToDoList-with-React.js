import React,{ useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
 
  useEffect(() => {
    filterHandler();
  }, [todos,status]);

  // functions
  
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo)=> todo.completed === true ));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo)=> todo.completed === false ));
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  }

  
  return (
    <div className="App">
      <header>
      <h1>TO DO LIST</h1>
      </header>
      <Form  todos = {todos} 
            setTodos = {setTodos} 
            inputText = {inputText} 
            setInputText={setInputText}
            setStatus = {setStatus} />
      <ToDoList setTodos = {setTodos}
       todos = {todos}
       filteredTodos = {filteredTodos} />  
    </div>
  );
}

export default App;
