import React, {use, useState} from 'react'

export default function LoginForm() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[error,setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) {
            setError("All fields are required")
        } else {
            setError("")
            alert("logged in !!")
            setEmail("");
            setPassword("");
        }
    }
  return (
    <>
    <h1>LoginForm</h1>
    <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/> <br/>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>
        <button type='submit'>Submit</button>
        {error && <p style={{color:"purple"}}>{error}</p>}
    </form>
    </>
    
  )
}
