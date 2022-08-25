import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./top.scss";

class Index extends Component {
  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target.value);

      // 数据校验
      if (!event.target.value.trim()) {
        alert("数据不能为空");
        return;
      }
      const obj = {
        id: nanoid(),
        name: event.target.value,
        done: false,
      };
      this.props.addTodo(obj);
      event.target.value = "";
    }
  };

  render() {
    return (
      <div className="header-contain">
        <input
          className="header-input"
          type="text"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default Index;
