import React, { useState, useEffect } from "react";

function PaginationDemo() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const totalPages = Math.ceil(users.length / perPage);
  const startIndex = (page - 1) * perPage;
  const currentUsers = users.slice(startIndex, startIndex + perPage);

  return (
    <div>
      <h2>Users (Page {page} of {totalPages})</h2>
      
      <ul>
        {currentUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div>
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
        >
          Previous
        </button>
        
        <span> Page {page} </span>
        
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginationDemo;