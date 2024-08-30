import React, { useEffect, useState } from 'react'

function Example3() {
    const[millisecond,setMillisecond]=useState(0)
    const[start,setStart]=useState(false)
    useEffect(()=>{
        let interval
        if (start) {
            interval=setInterval(()=>{
                setMillisecond((prev)=>prev+10)
            },10)
        } else {
            clearInterval(interval)
        }

        // clean-up function
        return()=>{
            clearInterval(interval)
        }
    },[start])

    const ms=Math.trunc(millisecond%1000)
    const sec=Math.trunc((millisecond/1000)%60)
    const min=Math.trunc((millisecond/1000/60)%60)
    function reset(){
        setStart(false)
        setMillisecond(0)
    }
  return (
    <div>
        <h1>Stopwatch</h1>
        <div className='display'>
            <h1>
                <span>{min?min<10?"0"+ min:min:"00"}:</span>
                <span>{sec?sec<10?"0"+sec:sec:"00"}:</span>
                <span>{ms?ms:"000"}</span>
            </h1>
        </div>
        <div className='buttons'>
            <button onClick={()=>setStart(true)}>Start</button>
            <button onClick={()=>setStart(false)}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Example3