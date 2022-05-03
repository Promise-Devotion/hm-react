import React, { useState } from "react";
import "./App.css";
import MyHeader from "./components/header/header";
import AddInput from "./components/addinput/addinput";

function App() {
  const [isInputShow, setIsInputShow] = useState(false);
  return (
    <div className="app">
      <MyHeader openInput={() => setIsInputShow(!isInputShow)} />
      <AddInput isInputShow={isInputShow} />{" "}
    </div>
  );
}

export default App;
