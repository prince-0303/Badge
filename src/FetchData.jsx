 import React, { useEffect, useState } from 'react'
 import axios from 'axios'
 
 const FetchData = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setState(res.data))
        .catch(error => console.log('error', error))
    })
   return (
     <div>
        <h2>Datas</h2>

        <table border='1'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                </tr>
            </thead>
            <tbody>
                {
                  state.slice(0,10).map((item) =>(
                    <tr key={item.id}>
                       <td>{item.id}</td>
                       <td>{item.title}</td>
                        </tr>
                  ))
                }
            </tbody>
        </table>
     </div>
   )
 }
 
 export default FetchData