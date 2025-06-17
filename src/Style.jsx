import React, { useState } from 'react'

const Style = () => {
    const [color, setColor]=useState(false)

    const handleClick= ()=>{
        setColor(prev => !prev)
    }
  return (
    <div>
        <button onClick={handleClick} style={{ backgroundColor:color ?'red':'blue', color:'white'} }>Click me</button>
    </div>
  )
}

export default Style