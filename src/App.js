import React from "react";
import "./App.css";
import Input from "./components/input";
import Button from "./components/button";
function App() {
  return (
    <div className="App">
      <h2>Log In</h2>
      <form>
        <Input type="text" name="name" label="Name "></Input>
        <br></br>
        <Input type="text" name="password" label="Password "></Input>

        <br></br>
        <br></br>
      </form>
      <Button onClick={() => console.log("Reset pressed")} btnName="Reset" />
      <Button onClick={() => console.log("Submit pressed")} btnName="Submit" />
    </div>
  );
}

export default App;
