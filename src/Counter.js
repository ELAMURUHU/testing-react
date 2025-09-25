import React,{useState} from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
  return (
    <>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count+1)}>Increase +</button>
        <button onClick={() => setCount(Math.max(0,count-1))}>Decrease -</button>
        <button onClick={() => setCount(0)}>RESET</button>
    </>
  )
}
