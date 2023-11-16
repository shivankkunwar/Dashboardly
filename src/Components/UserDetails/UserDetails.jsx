import React, { useState, useEffect } from "react";

import "./UD.css";
function UserDetails() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try{
    fetch("/userData.json?url")
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
    }
    catch(error){
        console.log(error.message);
    }
    
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="userdetails-outer">
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="table-responsive p-5 bg-gray-100 rounded-xl" >
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200 text-left ">
            <tr>
              <th className="w-45 p-3 text-sm font-semibold tracking-wide text-left ">Username</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
              <th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">Phone</th>
              <th className="w-12 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
              <th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">Creation Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, i) => (
              <tr key={user.id} className={i%2==0?"bg-white":"bg-gray-50"}>
                <td className="p-3 text-sm text-gray-700">{user.username}</td>
                <td className="email p-3 text-sm text-gray-700">{user.email}</td>
                <td className="p-3 text-sm text-gray-700">{user.phone}</td>
                <td className="p-3 text-sm text-gray-700">{user.id}</td>
                <td className="p-3 text-sm text-gray-700">{user.creationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails;
