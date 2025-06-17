import React from 'react'
import './grid3.css'

const Grid3 = () => {
    const items = Array.from({length:9}, (_, index) => index + 1)
    return (
        <div className='grid-container'>
        {
            items.map((item) => (
                <div key={item} className='grid-item'>
                    {item}
                </div>
            ))
        }
        </div>
    )
}

export default Grid3