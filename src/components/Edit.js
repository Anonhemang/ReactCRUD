import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Edit() {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure name and email from props (location.state)
  const { user } = location.state || { user: {} };
  const [name, setName] = useState(user.namee || "");
  const [email, setEmail] = useState(user.email || "");

  // Update User
  const EditUser = async () => {
    await axios.put("http://localhost/ReactCRUD/api.php", {
      id: user.id,
      name,
      email,
    });
    navigate("/home");
  };

  return (
    <>
      <h2 className="container mt-5"> Edit User</h2>
      <div className="container d-flex mt-3">
        <input
          type="text"
          value={name}
          placeholder="Name"
          className="form-control w-25"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          className="form-control w-50 ms-3"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary ms-3" onClick={EditUser}>
          Update
        </button>
      </div>
    </>
  );
}
