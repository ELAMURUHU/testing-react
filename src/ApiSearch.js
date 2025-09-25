import React from "react";
import { useEffect, useState } from "react";
function ApiSearch () {
    const[search,setSearch] = useState("");
    const [users,setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
    },[])

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <>
         <h2>API SEARCH</h2>
         <div>
            <input type="text" placeholder="enter the name.." value={search} onChange={(e) => setSearch(e.target.value)}/>
            <ul>
                {filteredUsers.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
         </div>
        </>
    )
}

export default ApiSearch;