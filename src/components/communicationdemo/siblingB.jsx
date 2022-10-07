import React from "react";

export default function SiblingB(params) {
  return (
    <div>
      <p>SiblingB</p>
      <div>
        <li>{params.name ? params.name : "Lily"}</li>
        <li>{params.age ? params.age : 20}</li>
        <li>{params.school ? params.school : "家里蹲"}</li>
      </div>
    </div>
  );
}
