import React from "react";
import { useState } from "react";
import SiblingA from "../../../../components/communicationdemo/siblingA";
import SiblingB from "../../../../components/communicationdemo/siblingB";
export default function Sibling(params) {
  const [person, setPerson] = useState({});
  const getPerson = (e) => {
    const obj = { ...person, ...e };
    setPerson(obj);
  };
  return (
    <div>
      <div>兄弟组件之间的通信</div>
      <p>此案例 组件传递person对象给B组件显示</p>
      <div>
        <SiblingA patchPerson={getPerson} />
        <SiblingB {...person} />
      </div>
    </div>
  );
}
