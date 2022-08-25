import React from "react";
import "./header.scss";
import { useBearStore } from "../../store";

export default function Index() {
  const count1 = useBearStore((state) => state.count);
  return (
    <div className="header-contain">
      <input className="header-input" type="text" />
      <span>{count1}</span>
    </div>
  );
}

// export default Index;
