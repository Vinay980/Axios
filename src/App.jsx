import React, { useState } from 'react'
import ClassLifecycle from './ClassLifecycle'
import './App.css'

function App() {
  const[flag,setFlag]=useState(true)
  return (
    <div className='kuch'>
      <button onClick={()=>setFlag(!flag)}>{flag?"Remove Component":"Add Component" }</button>
      {flag &&<ClassLifecycle color="green" />}
    </div>
  )
}

export default App