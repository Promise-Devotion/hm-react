import Basic from "../pages/Home/BasicKnowledge/Base";
// import Login from "@/views/login/index";
// import Page404 from "@/views/test/page404";

const routes = [
  {
    path: "/basic",
    element: () => import("../pages/Home/BasicKnowledge/Base"),
    meta: {
      title: "基础知识",
      needLogin: true,
    },
  },
];

export { routes };
