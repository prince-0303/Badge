import React, { useEffect, useState } from 'react'
import './grid.css'

const GridBox = () => {
  const totalBoxes = 9
  const defaultColor = '#ddd'
  const changedColor = '#4caf50'
  const [colors, setColors] = useState(Array(totalBoxes).fill(defaultColor))
  const [clickOrder, setClickOrder] = useState([])
  const [isReversing, setIsReversing] = useState(false)

  const handleClick = (index) => {
    if (isReversing || colors[index] !== defaultColor) return

    const newColors = [...colors]
    const newOrder = [...clickOrder]

    newColors[index] = changedColor
    newOrder.push(index)

    setColors(newColors)
    setClickOrder(newOrder)

    if (newOrder.length === totalBoxes) {
      setIsReversing(true)
    }
  }

  // Auto-reverse logic
  useEffect(() => {
    if (isReversing && clickOrder.length > 0) {
      clickOrder.slice().reverse().forEach((idx, i) => {
        setTimeout(() => {
          setColors(prev => {
            const updated = [...prev]
            updated[idx] = defaultColor
            return updated
          })

          // When done reversing
          if (i === clickOrder.length - 1) {
            setClickOrder([])
            setIsReversing(false)
          }
        }, i * 400) // Delay between reversals
      })
    }
  }, [isReversing])

  return (
    <div className="grid-container">
      {colors.map((color, index) => (
        <div
          key={index}
          className="grid-box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  )
}

export default GridBox
