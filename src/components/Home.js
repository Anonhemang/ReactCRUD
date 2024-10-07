import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Get Data
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost/ReactCRUD/api.php");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Delete Data
  const deleteData = async (id) => {
    if (window.confirm("Want To Delete This Data")) {
      await axios.delete(`http://localhost/ReactCRUD/api.php?id=${id}`);
      getData();
    }
  };

  // Set Edit user
  const editUser = (user) => {
    navigate(`/Edit/${user.id}`, { state: { user } });
  };

  return (
    <div className="container">
      <Link to="/" className="btn btn-warning m-5">
        Add New Data
      </Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.namee}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editUser(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger ms-3"
                  onClick={() => deleteData(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
