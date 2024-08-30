import React, { useEffect, useState } from 'react'

function Example2() {
    const [count,setCount]=useState(0)
    const [bgcolor,setBgcolor]=useState("white")
    useEffect(()=>{
        if(count>0 && count%2==0){
            setBgcolor("green")
        }
        else if (count>0 && count%2!=0) {
            setBgcolor("red")
        }
        else if(count<0){
            setBgcolor("blue")
        } 
        else{
            setBgcolor("white")
        }
    },[count])
  return (
    <div>
        <h1>Using Dependencies in useEffect</h1>
        <div style={{
                height:"200px",textAlign:"center",border:"2px solid black",width:"500px",margin:"auto",background:bgcolor,alignContent:"center"
            }}>
            <button onClick={()=>setCount(count+1)}>+</button>
            <b>{count}</b>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    </div>
  )
}

export default Example2