import React from "react";
import { useState } from "react";
import DescendantChild from "../../../../components/communicationdemo/descendant-child";

export const PersonContext = React.createContext();

export default function Descendant(params) {
  const [person, setPerson] = useState({
    name: "jim",
    age: 18,
    school: "哈弗大学",
  });
  return (
    <div>
      <div>父组件向后代组件传递</div>
      <p>此案例 父组件传递person对象给后代组件显示</p>
      <div>
        <PersonContext.Provider value={person}>
          <DescendantChild />
        </PersonContext.Provider>
      </div>
    </div>
  );
}
