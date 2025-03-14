import { useState } from "react";

function UserList({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => handleUserClick(user)}
            style={{ cursor: "pointer", marginBottom: "5px" }}
          >
            {user.name}
          </li>
        ))}
      </ul>

      {selectedUser && (
        <div style={{ marginTop: "20px" }}>
          <h2>User Details</h2>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Age:</strong> {selectedUser.age}</p>
          <p><strong>Occupation:</strong> {selectedUser.occupation}</p>
        </div>
      )}
    </div>
  );
}

export default UserList;
