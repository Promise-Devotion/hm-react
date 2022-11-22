import service from "../service/request";

export default function queryUser ( params ) {

  return service({
    url: "/users/userlist?name=jim",
    // burl: 'http://47.103.86.227:10120/global-manager',
    method: "get",
    params,
  });
}
