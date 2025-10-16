
import { useState } from 'react'
import './App.css'

function App() {
  const [count,setcount]=useState(0)
  return (
    <>
    <h1>counter app</h1>
    <h3>count:{count}</h3>
    <button onClick={()=>setcount(count+1)}>increment</button>
    <button onClick={()=>setcount(count-1)}>decrement</button>
    <button onClick={()=>setcount(0)}>reset</button>
    </>
  )
}

export default App
