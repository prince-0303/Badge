import React, { useState } from 'react'

const Counter = () => {
    const [state, setState] = useState(0)


    const handleClick = () => {
        setState((prev) => prev+1)
    }
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={handleClick} >ADD</button>
    </div>
  )
}

export default Counter