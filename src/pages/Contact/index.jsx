import React from "react";
import { useBearStore } from "../../store";
// import Button from  'reactui11111/button'

export default function Contact() {
  const count1 = useBearStore((state) => state.count);
  // console.log(Button)

  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return (
    <div className="layout-contain">
      <p>{count1}</p>
        {/*<Button level="primary" className="a" size="medium" onClick={increasePopulation}>+1</Button>*/}
      <button onClick={increasePopulation}>+1</button>
    </div>
  );
}
