import React from "react";
import "./App.css";
import { Info } from "../info/info";
import { Gentleman } from "../gentleman/gentleman";
import { ButtonSelectAll } from "../button/button";

function App() {
  return (
    <>
      <div className="container">
        <ButtonSelectAll></ButtonSelectAll>
        <main className="main">
          <Info></Info>
        </main>
      </div>
    </>
  );
}

export default App;
