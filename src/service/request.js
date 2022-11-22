import axios from "axios";

// 导出Request，可以用来自定义传递配置来创建实例
const service = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // process.env.BASEURL,
  timeout: 15000, // 请求超时时间
});

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // 一般会请求拦截里面加token，用于后端的验证
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  (err) => {
    // 请求错误，这里可以用全局提示框进行提示
    return Promise.reject(err);
  }
);
// 响应拦截
service.interceptors.response.use((response) => {
  const res = response.data;
  if (res.code === 200) {
    return Promise.resolve(res.data);
  }
});

export default service;
