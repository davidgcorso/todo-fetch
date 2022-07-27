import React, {useState} from 'react'
import Todo from './Todo.jsx';
import TodoForm from "./TodoForm.jsx";
import UserName from './UserName.jsx';

function TodoList({name}) {
  const [todos, setTodos] = useState([]);

  const addTodo = todo =>{

    const newTodos = [todo, ...todos];

    setTodos(newTodos)
    console.log(...todos)
    console.log(todos.length)
    console.log(newTodos)
    fetch('https://assets.breatheco.de/apis/fake/todos/user/'+name, {
      method: "PUT",
      body: JSON.stringify(newTodos), 
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  }

  const removeTodo = id =>{
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
    fetch('https://assets.breatheco.de/apis/fake/todos/user/'+name, {
      method: "PUT",
      body: JSON.stringify(removeArr), 
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  }

  const deleteTodos = () =>{
    setTodos([]);
    fetch('https://assets.breatheco.de/apis/fake/todos/user/'+name, {
      method: "PUT",
      body: JSON.stringify([
        {
          "label": "sample task",
          "done": false
        }
      ]), 
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        console.log(resp.text()); // will try return the exact result as string
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
        //here is were your code should start after the fetch finishes
        console.log(data); //this will print on the console the exact object received from the server
    })
    .catch(error => {
        //error handling
        console.log(error);
    });
  }

  return (
    <div className='container w-50'>
      <TodoForm onSubmit={addTodo} todos={todos}/>
      <Todo todos={todos} removeTodo={removeTodo}/>
      <div className='text-start text-secondary border-bottom border-warning pt-4 m-2'>{todos.length == 0 ? "No hay tareas ¡Agrega una!" : todos.length + " " + "item left"}</div>
      <button className='btn btn-warning'onClick={()=> deleteTodos()}>Borrar</button>
    </div>
  )
}

export default TodoList