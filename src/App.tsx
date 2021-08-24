import React from "react";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <Button onClick={() => console.log("clicked")}>Primary Button</Button>{" "}
      <br /> <br />
      <Button onClick={() => console.log("clicked")} variant="secondary">
        Secondary Button
      </Button>
    </>
  );
}

export default App;
