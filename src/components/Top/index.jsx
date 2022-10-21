import React from "react";
import logoImg from "../../assets/img/swallow.jpg";
import { useTitleStore } from "../../store/header";
import "./top.scss";

export default function Index() {
  let color = useTitleStore((state) => state.color);

  return (
    <div className="header-contain">
      <div className="logo-contain">
        <img src={logoImg} alt="" />
        <span className="app-name" style={{ color: color }}>
          swallow-react
        </span>
      </div>
      <div>
        <a
          href="#!"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          登录
        </a>
        /
        <a
          href="#!"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          注册
        </a>
      </div>
    </div>
  );
}

