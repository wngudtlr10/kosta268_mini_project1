import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // axios를 사용하여 json-server에서 데이터 불러오기
    axios
      .get("http://localhost:5000/user") // 'user'로 엔드포인트 수정
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("데이터를 불러오는데 실패했습니다:", error);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.userid}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
