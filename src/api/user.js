import service from "../service/request";

export default function queryUser ( params ) {

  return service({
    url: "/users/userlist",
    method: "get",
    params,
  });
}
