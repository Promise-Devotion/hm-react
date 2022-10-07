import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./home.scss";

export default function Home() {
  return (
    <div className="home-contain">
      <div className="home-left">
        <nav>
          <li>
            <Link to="basic">basic</Link>
          </li>
          <li>
            <Link to="communication">组件通信</Link>
          </li>
          <li>
            <Link to="parentToChild">父组件向子组件传递</Link>
          </li>
          <li>
            <Link to="childToParent">子组件向父组件传递</Link>
          </li>
          <li>
            <Link to="sibling">兄弟组件之间的通信</Link>
          </li>
          <li>
            <Link to="descendant">父组件向后代组件传递</Link>
          </li>
          <li>
            <Link to="nonRealtional">非关系组件传递</Link>
          </li>
        </nav>
      </div>
      <div className="right-contain">
        <Outlet />
      </div>
    </div>
  );
}
