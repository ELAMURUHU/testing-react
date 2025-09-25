import React from 'react'

export default function Child({message , sendback}) {
    // console.log(message);
  return (
    <>
        <div>
            <h1>Message from Parent : {message}</h1>
            <button onClick={() => sendback("from child")}>Send Back</button>
        </div>
    </>
  )
}
