import React from "react";
import { useState } from "react";
import ToParent from "../../../../components/communicationdemo/child-to-parent";

export default function ChildToParent() {
  const [person, setPerson] = useState({
    name: "jim",
    age: 18,
    school: "哈弗大学",
  });
  const getPerson = (e) => {
    console.log(e);
    const obj = { ...person, ...e };
    setPerson(obj);
  };
  return (
    <div>
      <div>子组件向父组件传递</div>
      <p>
        注意点： 子组件传的方法 patchPerson=getPerson
        patchPerson是出传给子组件的方法，getPerson是父组件方法 子组件中 点击事件
        要以一个onClick= () ={">"}
        props.patchPerson school: "家里蹲大学" ;
      </p>
      <div>
        <div>
          <li>{person.name}</li>
          <li>{person.age}</li>
          <li>{person.school}</li>
        </div>
        <ToParent name="父组件向子组件传递" patchPerson={getPerson} />
      </div>
    </div>
  );
}
