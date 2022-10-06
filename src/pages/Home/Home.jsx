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
            <Link to="new">new</Link>
          </li>
        </nav>
      </div>
      <div className="right-contain">
        <Outlet />
      </div>
    </div>
  );
}
