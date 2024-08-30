import React, { useEffect, useState } from 'react'

function Example() {
    const[data,setData]=useState([])
    const url="https://jsonplaceholder.typicode.com/users"
    // async function fetchAPI(){
    //     let response=await fetch(url)
    //     let data=await response.json()
    //     setData(data.data)
    // }
    useEffect(()=>{
        fetch(url).then((res)=>res.json())
        .then((d)=>setData(d))
        .catch(err=>console.log(err)
        )

        // fetchAPI()
    },[])
  return (
    <div>
        <h1>Perform Async Oprations in react</h1>
        <h2>All data of 10 users</h2>
        <table border={1} style={{borderCollapse:"collapse"}} cellPadding={15}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>UserName</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(e=>{
                        return(
                            <tr >
                                <td>{e?.id}</td>
                                <td>{e?.name}</td>
                                <td>{e?.email}</td>
                                <td>{e?.username}</td>
                                <td>{e?.phone}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Example