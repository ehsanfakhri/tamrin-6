import "./UsersPage.css";

import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="user-list">
      <h2>User List</h2>
      <div className="user-list-wrapper">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={user.image} alt={user.name} />
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous Page
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)}>
          Next Page
        </button>
      </div>
      <p>Current Page: {currentPage}</p>
    </div>
  );
};

export default UserList;
