import React, { useRef } from "react";

import "./addinput.scss";

function AddInput(props) {
  const { isInputShow } = props,
    inputRef = useRef();

  const submitClick = () => {
    const inputValue = inputRef.current.value;
    if (!inputValue.trim()) {
      console.log("nothing");
      return;
    } else {
      console.log(`提交了${inputValue.trim()}`);
    }
  };

  return isInputShow ? (
    <div className="addinput">
      <input type="text" ref={inputRef} placeholder="请输入代办事件" />
      <button className="btn btn-primary" onClick={submitClick}>
        增加
      </button>
    </div>
  ) : (
    ""
  );
}

export default AddInput;
