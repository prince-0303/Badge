import React, { useState } from 'react'
import './todoList.css'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const handleInput = () => {
        if (input.trim()) {
            setTodos([...todos, input])
            setInput('')
        }
    }

    const deleteInput = (index) => {
        const updatedTodo = todos.filter((_, i) => i !== index)
        setTodos(updatedTodo)
    }

    return (
        <div className='todo-container' >
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleInput} >Submit</button>

            <ul>
                {
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => deleteInput(index)} >Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList