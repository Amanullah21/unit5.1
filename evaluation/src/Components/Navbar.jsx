import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/Register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/:id"></Link>
    </div>
  );
};

export default Navbar;
