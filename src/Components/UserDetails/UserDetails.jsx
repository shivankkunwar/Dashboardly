import React, { useState, useEffect } from "react";

import "./UD.css";
function UserDetails({openModal}) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  

  useEffect(() => {
    try {
      fetch("/userData.json?url")
        .then((response) => response.json())
        .then((data) => setUsers(data.users));
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="userdetails-outer ">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white  px-12">
        <div className="flex justify-between">
          <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                  <svg
                    width="18"
                    height="18"
                    className="w-4 lg:w-auto"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                      stroke="#455A64"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.9993 16.9993L13.1328 13.1328"
                      stroke="#455A64"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive p-5 bg-gray-100 rounded-xl">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200 text-left ">
            <tr>
              <th className="w-45 p-3 text-sm font-semibold tracking-wide text-left ">
                Username
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Email
              </th>
              <th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">
                Phone
              </th>
              <th className="w-12 p-3 text-sm font-semibold tracking-wide text-left">
                ID
              </th>
              <th className="w-25 p-3 text-sm font-semibold tracking-wide text-left">
                Creation Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, i) => (
              <tr
                key={user.id}
                className={i % 2 == 0 ? "bg-white" : "bg-gray-50"}
              onClick={openModal}>
                <td className="p-3 text-sm text-gray-700">{user.username}</td>
                <td className="email p-3 text-sm text-gray-700">
                  {user.email}
                </td>
                <td className="p-3 text-sm text-gray-700">{user.phone}</td>
                <td className="p-3 text-sm text-gray-700">{user.id}</td>
                <td className="p-3 text-sm text-gray-700">
                  {user.creationDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserDetails;
