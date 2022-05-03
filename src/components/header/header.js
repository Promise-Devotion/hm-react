import React from "react";

import "./header.scss";

function Header(props) {
  const { openInput } = props;
  return (
    <div className="header">
      <h2 className="header-title">
        <span>代办事件</span>
        <span className="icon" onClick={openInput}>
          &#43;
        </span>
      </h2>
    </div>
  );
}

export default Header;
