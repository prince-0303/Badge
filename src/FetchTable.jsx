import React, { useEffect, useState } from 'react'

const FetchTable = () => {
    const [state, setState] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => setState(data))
        .catch((error) => console.log('Error...',error))
    },[])

    const FilteredData = state.filter((item) => 
        item.title.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>
        <h1>FetchTable</h1>

        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <table border= '1' >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {FilteredData.slice(0,5).map((data) => (
                    <tr key={data.id} >
                        <td>{data.id}</td>
                        <td>{data.title}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default FetchTable