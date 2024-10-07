import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Add User
  const addUser = async () => {
    if (name && email) {
      try {
        await axios.post("http://localhost/ReactCRUD/api.php", {
          name,
          email,
        });
        setName("");
        setEmail("");
        // getUser();
        alert("Thank You For Registration");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please Fill All The Fields");
    }
  };

  // --------------------------------------------------------------------------------

  return (
    <>
      <div className="container mt-5">
        <center>
          <h1>Add New Data</h1>
        </center>
        <input
          type="text"
          className="form-control w-75 mt-3 m-auto"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control w-75 m-auto mt-3"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <center>
          <button className="btn btn-success  mt-3" onClick={addUser}>
            Submit
          </button>
        </center>
        <Link to="/Home" className="btn btn-warning float-end">
          View All Users
        </Link>
      </div>
    </>
  );
}
