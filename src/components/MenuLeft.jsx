import React, { Component } from "react";
import { Menu } from "antd";
// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";

import { UserOutlined } from "@ant-design/icons";
// 高阶组件，包裹useNavigate()功能
import widthUseNavigate from "./WidthUseNavigate";
class SiderLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          key: "/home",
          icon: React.createElement(UserOutlined),
          label: "概览",
        },
        {
          key: "/home/user",
          icon: React.createElement(UserOutlined),
          label: "React Hooks",
          children: [
            {
              key: "/basic",
              label: "基础知识",
            },
            {
              key: "/home/user/auth",
              label: "权限设置",
            },
          ],
        },
      ],
    };
  }

  click = (e) => {
    console.log(e);
    console.log(e.key);
    //注意this指向问题，采用箭头函数this就指向当前组件
    this.props.to(e.key);
  };

  openChange() {
    console.log("OpenChange");
  }
  render() {
    return (
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["/home"]}
        defaultOpenKeys={["/home/user"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={this.state.items}
        onOpenChange={() => this.openChange()}
        onClick={this.click}
      />
    );
  }
}
// 使用高阶组件包裹当前类组件
const NavigateCompont = widthUseNavigate(SiderLeft);
// 导出包裹后的类组件
export default NavigateCompont;
