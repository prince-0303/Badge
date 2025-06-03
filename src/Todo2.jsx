import React, { useState } from 'react'

const Todo2 = () => {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const addTodo = () => {
        if(input.trim()){
            setTodos([...todos, input])
            setInput('')
        }
    }

    const deleteTodo = (index) => {
            const updatedTodo = todos.filter((_, i) => i !== index)
            setTodos(updatedTodo)

    }

    return (
        <div>
            <h2>Todo-list</h2>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo} > Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}> 
                        {todo}
                        <button onClick={() => deleteTodo(index)} >Del</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo2