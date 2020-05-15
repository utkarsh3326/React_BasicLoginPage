import React from "react";

import "./App.css";
import Button from "./components/button";
import Data from "./utility/data";
import Input from "./components/input";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      password: "",
      showValue: "",
      showPassword: "",
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onChangeText(name, e) {
    name === "name"
      ? this.setState({ value: e.target.value })
      : this.setState({ password: e.target.value });
  }
  onButtonClick() {
    this.setState({ showValue: this.state.value });
    this.setState({ showPassword: this.state.password });
  }
  showInputComponents() {
    return Data.Inputs.map((input) => (
      <Input
        key={input.id}
        type={input.type}
        name={input.name}
        label={input.label}
        value={this.state}
        onChange={this.onChangeText}
      ></Input>
    ));
  }
  showButtonComponents() {
    return Data.Buttons.map((button) => (
      <Button
        key={button.id}
        onClick={this.onButtonClick}
        btnName={button.name}
      />
    ));
  }
  render() {
    return (
      <div className="login">
        <h2>Log In</h2>
        <form>
          {this.showInputComponents()}
          <br></br>
          <br></br>
        </form>
        {this.showButtonComponents()}
        <p>{this.state.showValue}</p>
        <p>{this.state.showPassword}</p>
      </div>
    );
  }
}

export default App;
