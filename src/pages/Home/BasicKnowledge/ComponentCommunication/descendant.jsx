import React from "react";
import { useState } from "react";
import DescendantChild from "../../../../components/communicationdemo/descendant-child";

export const PersonContext = React.createContext();

export default function Descendant(params) {
    /**
     * {
     *     name: "jim",
     *     age: 18,
     *     school: "哈弗大学",
     *   }
     */
  const [person, setPerson] = useState({
        name: "jim",
        age: 18,
        school: "哈弗大学",
    });
  const changePerson = () => {
      const obj = {...person, age: 22}
      setPerson(obj)
  }
  return (
    <div>
      <div>父组件向后代组件传递</div>
      <p>此案例 父组件传递person对象给后代组件显示</p>
        <div>
            <button onClick={changePerson}>改变后代数据</button>
        </div>
      <div>
        <PersonContext.Provider value={{person}}>
          <DescendantChild />
        </PersonContext.Provider>
      </div>
    </div>
  );
}
