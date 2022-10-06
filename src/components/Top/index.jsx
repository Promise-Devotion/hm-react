import React, { Component } from "react";
import logoImg from "../../assets/img/swallow.jpg";
import "./top.scss";

class Index extends Component {
  render() {
    return (
      <div className="header-contain">
        <div className="logo-contain">
          <img src={logoImg} alt="" />
          <span className="app-name">swallow-react</span>
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
}

export default Index;
