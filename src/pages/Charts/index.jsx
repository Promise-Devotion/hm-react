import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Charts() {
  return (
    <div className="home-contain">
      <div className="home-left">
        <nav>
          <li>
            <Link to="lineChart">柱状图echart</Link>
          </li>
          <li>
            <Link to="canvasConponent">canvas学习</Link>
          </li>
        </nav>
      </div>
      <div className="right-contain">
        <Outlet />
      </div>
    </div>
  );
}
