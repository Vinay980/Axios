import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Axios() {
    const [data,setData]=useState([])
    useEffect(()=>{
        // axios.get("https://jsonplaceholder.typicode.com/users")
        // .then(data=>setData(data.data))
        // .catch(error =>console.log(error))

        fetchData()
    })

    const fetchData=async()=>{
        let data =await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(data.data)
    }
  return (
    <>
        {/* <h1>AXIOS</h1> */}
        <h1>Perform Async Oprations in react</h1>
        <h2>All data of 10 users</h2>
    <div style={{display:"flex"}}>
        <table border={1} style={{borderCollapse:"collapse"}} cellPadding={7}>
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
                                <td style={{cursor:"pointer"}}>{e?.name}</td>
                                <td>{e?.email}</td>
                                <td>{e?.username}</td>
                                <td>{e?.phone}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        <table border={1} style={{borderCollapse:"collapse"}} cellPadding={7}>
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Website</th>
                    <th>CompanyName</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    data.map(e=>{
                        return(
                            <tr >
                                <td>{e?.address.city}</td>
                                <td>{e?.website}</td>
                                <td>{e?.company.name}</td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Axios
