import React, { useEffect, useState } from 'react'

export const Home = () => {
  const[ arr, setArr] =useState([])

  const url = "http://localhost:3000/Employe";

  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setArr(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => getTodo(), []);

  return (
    <div>
        {arr.map((ele, index) => (
          <div>
            <span>Name {ele.name}</span>
            <span>Age:{ele.age}</span>
            <span>Department : {ele.department}</span>
            <span>Gender :{ele.gender}</span>
            <span>Age{ele.age}</span>
            <span>mobile{ele.mobile}</span>
            <span>image{ele.image}</span>
            <span>role{ele.role}</span>
            <span>Salary :{ele.salary}</span>
          </div>
        ))}
      </div>
  )
}
