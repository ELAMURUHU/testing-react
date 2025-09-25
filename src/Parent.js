import React, { useState } from 'react'
import Child from './Child'

export default function Parent() {
    const[childMsg,setChildMsg] = useState("")
  return (
    <>
        <h1>Parent</h1>
        <Child message="Hi its from parant" sendback={setChildMsg}/>
        {childMsg && <h1>From Child: {childMsg}</h1>}
    </>
  )
}
