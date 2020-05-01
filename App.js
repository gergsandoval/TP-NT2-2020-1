import React, { Component } from "react";
import { View, Vibration } from "react-native";
import Style from "./components/styles";
import Header from "./components/header";
import StartButton from "./components/buttons/startButton";
import StopButton from "./components/buttons/StopButton";
import ResetButton from "./components/buttons/ResetButton";
import Timer from "./components/timer";

let interval;

const workState = {
  initialSeconds: 60 * 25,
  actualSeconds: 60 * 25,
  description: "work",
  running: false,
};

const breakState = {
  initialSeconds: 5 * 60,
  actualSeconds: 5 * 60,
  description: "break",
  running: false,
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = workState;
  }

  handleNotification = () => {
    if (this.state.actualSeconds === 0) {
      Vibration.vibrate([500, 500, 500]);
      clearInterval(interval);
      this.changeClock();
      this.onStart();
    }
  };

  changeClock = () => {
    if (this.state.description === "work") {
      this.setState(breakState);
    } else {
      this.setState(workState);
    }
  };

  onStart = () => {
    interval = setInterval(() => {
      this.setState({
        actualSeconds: this.state.actualSeconds - 1,
        running: true,
      });
      this.handleNotification();
    }, 1000);
  };

  onStop = () => {
    clearInterval(interval);
    this.setState({
      running: false,
    });
  };

  onReset = () => {
    clearInterval(interval);
    if (this.state.description === "work") {
      this.setState({
        actualSeconds: workState.initialSeconds,
        running: false,
      });
    } else {
      this.setState({
        actualSeconds: breakState.initialSeconds,
        running: false,
      });
    }
  };

  render = () => {
    return (
      <View style={Style.appContainer}>
        <Header />
        <Timer
          style={Style.actualSeconds}
          actualSeconds={this.state.actualSeconds}
        />
        <View style={Style.buttonsContainer}>
          <StartButton disabled={this.state.running} onStart={this.onStart} />
          <StopButton disabled={!this.state.running} onStop={this.onStop} />
          <ResetButton onReset={this.onReset} />
        </View>
      </View>
    );
  };
}
