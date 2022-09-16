import axios from "axios";
import React, { Component } from "react";

export default class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("注册");
    const obj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(obj);
    const baseUrl = "http://127.0.0.1:5000/api";
    const url = `${baseUrl}/users/register`;
    axios.post(url, obj).then((res) => {
      alert(res);
    });
  };
  handlechange = (event) => {
    const title = event.target.name;
    this.setState({
      [title]: event.target.value,
    });
  };
  render() {
    return (
      <div className="register-contain">
        <p>注册</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">名字</label>
            <input
              type="text"
              name="name"
              onChange={this.handlechange}
              value={this.state.name}
              placeholder="请输入名字"
            />
          </div>
          <div>
            <label htmlFor="">邮箱</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handlechange}
              placeholder="请输入邮箱"
            />
          </div>
          <div>
            <label htmlFor="">密码</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handlechange}
              placeholder="请输入密码"
            />
          </div>
          <div>
            <button onClick={this.handleSubmit}>注册</button>
          </div>
        </form>
      </div>
    );
  }
}
