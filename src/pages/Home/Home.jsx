import React from "react";
import NavigateCompont from "../../components/MenuLeft";
import { Outlet } from "react-router";

export default function Home() {
  return (
    <div>
      <NavigateCompont></NavigateCompont>
      <Outlet></Outlet>
    </div>
  );
}
