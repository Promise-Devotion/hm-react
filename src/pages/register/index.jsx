import React, { Component } from "react";

export default class Register extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("注册");
  };
  render() {
    return (
      <div className="register-contain">
        <p>注册</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor=""></label>
            <input type="text" placeholder="请输入邮箱" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="password" placeholder="请输入密码" />
          </div>
          <div>
            <button onClick={this.handleSubmit}>注册</button>
          </div>
        </form>
      </div>
    );
  }
}
