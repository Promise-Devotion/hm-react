import React from "react";
import UserOne from "./components/user-one";
import UserTwo from "./components/user-two";

export default function Swrpage(params) {
  return (
    <div>
      <p>swrpage</p>
      <div>
        <UserOne />
        <hr />
        <UserTwo />
      </div>
    </div>
  );
}
