import React, { useState } from "react";

const init = {
  name: "",
  department: "",
  gender: "",
  age:0,
  mobile:"",
  image:"",
  role: "",
  salary: 0,
};

function EmpInput(props) {
  const [data, setData] = useState(init);

  const dataHandle = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="name"
        name="name"
        value={data.name}
        onChange={dataHandle}
      />
      <input
        type="text"
        placeholder="Department name"
        name="department"
        value={data.department}
        onChange={dataHandle}
      />
      <input
        type="number"
        placeholder="Mobile Number"
        name="mobile"
        value={data.mobile}
        onChange={dataHandle}
      />
      <input
        type="number"
        placeholder="age"
        name="age"
        value={data.age}
        onChange={dataHandle}
      />
      <input
        type="url"
        placeholder="image url"
        name="image_url"
        value={data.image_url}
        onChange={dataHandle}
      />

      <input
        type="text"
        placeholder="Gender name"
        name="gender"
        value={data.gender}
        onChange={dataHandle}
      />
      <input
        type="text"
        placeholder="Role"
        name="role"
        value={data.role}
        onChange={dataHandle}
      />
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        value={data.salary}
        onChange={dataHandle}
      />
      {/* {console.log(data.name)} */}
      <button
        onClick={() => {
          props.handleData(data);
        }}
      >
        Add to json
      </button>
    </div>
  );
}

export default EmpInput;
