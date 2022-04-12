import React, { useState } from 'react'

const Register = () => {
    
  const init = {
    name:"",
    email:"",
    mobile:0
}

  const  [data, setData] = React.useState(init)
  const [title,settitle] =useState("")
  // console.log(data)
  const dataHandle = (e) =>{
      const {value,name} = e.target
      setData({...data,[name]:value})
  }
  const url ="http://localhost:3000/user"
  const handleAdd= () =>{

    fetch(url,{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    })
  settitle("Succes full")
  
  }
    return (
      <div>
          <input
        type="text"
        placeholder="name"
        name="name"
        value={data.name}
        onChange={dataHandle}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={data.email}
        onChange={dataHandle}
      />
      <input
        type="number"
        placeholder="Number"
        name="mobile"
        value={data.mobile}
        onChange={dataHandle}
      />
           
              <button onClick={handleAdd}>Search</button>
  <div>{title}</div>
      </div>
    )
}

export default Register