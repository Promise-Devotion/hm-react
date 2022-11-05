import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      // textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="top-nav">
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/about">About</Link> */}
      <NavLink style={navLinkStyles} to="/home">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/noPage">
        NoPage
      </NavLink>
      <NavLink style={navLinkStyles} to="/register">
        register
      </NavLink>
      <NavLink style={navLinkStyles} to="/zustand">
        zustand
      </NavLink>
      <NavLink style={navLinkStyles} to="/charts">
        charts
      </NavLink>
      <NavLink style={navLinkStyles} to="/contact">
        contact
      </NavLink>
      <NavLink style={navLinkStyles} to="/todolist">
        todolist
      </NavLink>
    </nav>
  );
};
export default Navbar;
