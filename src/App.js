import React from "react";

import "./App.css";
import Button from "./components/Button";
import Data from "./utility/data";
import Input from "./components/Input";

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
    this.setState({
      showValue: this.state.value,
      showPassword: this.state.password,
    });
  }
  showInputComponents() {
    return Data.Inputs.map((input) => (
      <Input
        key={input.id}
        label={input.label}
        name={input.name}
        onChange={this.onChangeText}
        type={input.type}
      ></Input>
    ));
  }
  showButtonComponents() {
    return Data.Buttons.map((button) => (
      <Button
        btnName={button.name}
        key={button.id}
        onClick={this.onButtonClick}
      />
    ));
  }
  render() {
    return (
      <div className="login">
        <h2>Log In</h2>
        <div className="login_form">{this.showInputComponents()}</div>
        {this.showButtonComponents()}
        <p>{this.state.showValue}</p>
        <p>{this.state.showPassword}</p>
      </div>
    );
  }
}

export default App;
