import React from "react";
import { useBearStore } from "../../store";

export default function Contact() {
  const count1 = useBearStore((state) => state.count);

  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return (
    <div className="layout-contain">
      <p>{count1}</p>
      <button onClick={increasePopulation}>+1</button>
    </div>
  );
}
