import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, SetName] = useState("");
  const [auth, setAuth] = useState(false);

  const [data, setData] = useState([]);
  const url = "http://localhost:3000/user";
  const check = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));

    data.map((ele) => (ele.name === name ? !auth : false));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={(e) => SetName(e.target.value)}
      />
      <Link to="/">
        <button onClick={check}>Login</button>
      </Link>
    </div>
  );
};

export { Login };
