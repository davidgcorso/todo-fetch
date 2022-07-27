import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState([]);

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            label: input,
            done: false
        })

        setInput([]);

    }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <div className="input-group row p-5">
            <input type="text" value={input} name="text" className='todo-input border border-warning col-8' onChange={handleChange}/>
            <button className='todo-button btn btn-warning col-4'> Agrega una tarea</button>
        </div>
    </form>
  )
}

export default TodoForm