import React,{use, useState} from 'react'

export default function ConditionalRender() {
    const[isLogged,setIsLogged] = useState(false)
  return (
    <>
     <h1>Conditional Rendering</h1>
     <div>
        {isLogged ? <h2>Logged In !!</h2> : <h2>Please Log In</h2>}
        <button onClick={() => setIsLogged(!isLogged)}>
            {isLogged ? "Logout" : "Login"}
        </button>
     </div>
    </>
  )
}
