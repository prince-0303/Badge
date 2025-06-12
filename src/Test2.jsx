import React, { useState } from 'react'

const Theme = () => {

    const [theme, setTheme] = useState('white')

    const handleClick = () => {
        setTheme 
    }

  return (
    <div>Theme</div>
  )
}

export default Theme
