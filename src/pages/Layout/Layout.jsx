import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import "./index.scss";

export default class Layout extends Component {
  render() {
    return (
      <>
        <nav className="nav-contain">
          <ul>
            <li className="router-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="router-item">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="router-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="router-item">
              <Link to="todolist">todolist</Link>
            </li>
            <li className="router-item">
              <Link to="nopage">nopage</Link>
            </li>
            <li className="router-item">
              <Link to="register">注册</Link>
            </li>
            <li className="router-item">
              <Link to="component">组件学习</Link>
            </li>
          </ul>
        </nav>
        <hr />

        <Outlet />
      </>
    );
  }
}
