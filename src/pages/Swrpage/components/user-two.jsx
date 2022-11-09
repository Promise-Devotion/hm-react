import React from "react";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await axios.get(url);
  return res.data;
};
export default function UserTwo(params) {
  const baseUrl = "http://127.0.0.1:5000/api";
  const url = `${baseUrl}/users/userlist?name=jim`;
  const { data } = useSWR(url, fetcher);
  console.log(data);
  let obj = null;
  if (data) {
    obj = data.data;
  }
  if (obj)
    return (
      <div>
        <p>title</p>
        <div>
          <span>{obj[0].name}</span>;
        </div>
      </div>
    );
  return (
    <div>
      <p>UserTwo</p>
      <div>nodata</div>
    </div>
  );
}
