import React, {useContext} from "react";
import { PersonContext } from "../../pages/Home/BasicKnowledge/ComponentCommunication/descendant";

export default function DescendantChild(params) {
  const { person } = useContext(PersonContext);
  const {name, age, school} = person
  // const contextType = PersonContext;
  console.log(person);
  return (
      <div>
        <p><span>{name}</span></p>
        <p><span>{age}</span></p>
        <p><span>{school}</span></p>
      </div>
  );
}
