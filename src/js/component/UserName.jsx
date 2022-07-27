import React, {useState} from 'react'
import TodoList from './TodoList.jsx';

function UserName() {
    const [name, setName] = useState("");
    const [showButton, setShowButton] = useState(true);

    const handleChangeUserName = e => {
        setName(e.target.value)
    }

    const onSubmitUserName = e =>{
        e.preventDefault();
        fetch('https://assets.breatheco.de/apis/fake/todos/user/'+name, {
      method: "POST",
      body: JSON.stringify([]), 
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => {
        console.log(resp.ok); // will be true if the response is successfull
        setShowButton(false)
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
    <>  
        <div>
        {showButton && <h4 className='text-light'>Ingresa tu nombre</h4>}
        </div>
        <h5 className='text-light'>Hola {name}!</h5>
        <div>
            {showButton && <form onSubmit={onSubmitUserName} className="container w-25">
            <div className='input-group row'>
                <input type="text" value={name} name="text" onChange={handleChangeUserName} className="col-8 border border-warning" ></input>
                <button className='todo-button btn btn-warning col-4'> Guardar</button>
            </div>
        </form>}
        </div>
        <TodoList name={name}/>
    </>
  )
}

export default UserName