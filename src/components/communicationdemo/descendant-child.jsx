import React from "react";
import { PersonContext } from "../../pages/Home/BasicKnowledge/ComponentCommunication/descendant";

export default function DescendantChild(params) {
  // const { person } = useContext();
  const contextType = PersonContext;
  console.log(PersonContext.value);
  return (
    <PersonContext.Consumer>
      {({ name, age, school }) => {
        <div>
          <span>{name}</span>
          <span>{age}</span>
          <span>{school}</span>
        </div>;
      }}
    </PersonContext.Consumer>
  );
}
