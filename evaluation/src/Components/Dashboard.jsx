import React, { useEffect, useState } from "react";
import EmpInput from "./EmpInput";

function Dashboard() {
  const [arr, setArr] = useState([]);

  const url = "http://localhost:3000/Employe";

  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setArr(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => getTodo(), []);

  const handleData = (title) => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(title),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => getTodo());
  };

  return (
    <div>
      <div>
        <EmpInput handleData={handleData} />
      </div>
     
      
    </div>
  );
}

export default Dashboard;
