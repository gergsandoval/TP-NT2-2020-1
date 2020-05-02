import React, { Component } from "react";
import { View, Vibration } from "react-native";
import Style from "./components/styles";
import Header from "./components/header";
import StartButton from "./components/buttons/startButton";
import StopButton from "./components/buttons/stopButton";
import ResetButton from "./components/buttons/resetButton";
import Timer from "./components/timer";
import WorkInput from "./components/inputs/workInput";
import BreakInput from "./components/inputs/breakInput";

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
    this.setState({
      running: true,
    });
    interval = setInterval(() => {
      this.setState({
        actualSeconds: this.state.actualSeconds - 1,
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
    this.setState({
      running: false,
    });
    if (this.state.description === "work") {
      this.setState({
        actualSeconds: workState.initialSeconds,
      });
    } else {
      this.setState({
        actualSeconds: breakState.initialSeconds,
      });
    }
  };

  changeWorkValue = (minutes) => {
    console.log(minutes);
  };

  changeBreakValue = (minutes) => {
    console.log(minutes);
  };

  render = () => {
    return (
      <View style={Style.appContainer}>
        <Header />
        <Timer
          style={Style.actualSeconds}
          actualSeconds={this.state.actualSeconds}
        />
        <View style={Style.rowContainer}>
          <StartButton disabled={this.state.running} onStart={this.onStart} />
          <StopButton disabled={!this.state.running} onStop={this.onStop} />
          <ResetButton onReset={this.onReset} />
        </View>
        <WorkInput
          changeWorkValue={this.changeWorkValue}
          initialSeconds={workState.initialSeconds}
        />
        <BreakInput
          changeBreakValue={this.changeBreakValue}
          initialSeconds={breakState.initialSeconds}
        />
      </View>
    );
  };
}
