// import Basic from "../pages/Home/BasicKnowledge/Base";
// import Login from "@/views/login/index";
// import Page404 from "@/views/test/page404";

const routes = [
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
];

export { routes };
