import React, { useState } from "react";
import UserDetails from "./Components/UserDetails/UserDetails";
import AccountCreation from "./Components/AccountCreation/AccountCreation";
function App() {
  const [tab, setTab] = useState("userDetails");
  let modal = document.getElementById("my-modal");

  let btn = document.getElementById("open-btn");

  let button = document.getElementById("ok-btn");
  function openModal() {
    modal.style.display = "block";
  }
  window.onclick = function (event) {
    if (event.target == modal && modal.style.display == "block") {
      modal.style.display = "none";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "10%",
      }}
    >
      <div
        class="fixed hidden inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20"
        id="my-modal"
      >
        <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div class="mt-3 text-center">
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                class="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Valid user details
            </h3>
            <div class="mt-2 px-7 py-3">
              <p class="text-sm text-gray-500">
                Want to generate report?
              </p>
            </div>
            <div class="flex  items-center px-4 py-3">
              <button
                id="ok-btn"
                class="m-4 px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                OK
              </button>
              <button
                id="ok-btn"
                class="m-4 px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4 p-5">
        <button
          className={`px-4 py-2 rounded-lg shadow-md font-semibold ${
            tab === "userDetails"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          }`}
          onClick={() => setTab("userDetails")}
        >
          User Details
        </button>
        <button
          className={`px-4 py-2 rounded-lg shadow-md font-semibold ${
            tab === "accountCreation"
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          }`}
          onClick={() => setTab("accountCreation")}
        >
          Account Creation
        </button>
      </div>

      
      <div>
        {tab === "userDetails" && <UserDetails openModal={openModal} />}
        {tab === "accountCreation" && <AccountCreation />}
      </div>
    </div>
  );
}

export default App;
