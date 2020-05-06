import React from "react";
import { View, Keyboard } from "react-native";
import Style from "./components/styles";
import Header from "./components/header";
import StartButton from "./components/buttons/startButton";
import StopButton from "./components/buttons/stopButton";
import ResetButton from "./components/buttons/resetButton";
import Timer from "./components/timer";
import WorkInput from "./components/inputs/workInput";
import BreakInput from "./components/inputs/breakInput";
import { vibrate } from "./utils";

let interval;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      workInitialSeconds: 60 * 25,
      breakInitialSeconds: 60 * 5,
      actualSeconds: 60 * 25,
      isWorkState: true,
      isRunning: false,
    };
  }

  handleNotification = () => {
    if (this.state.actualSeconds === 0) {
      vibrate();
      clearInterval(interval);
      this.changeClock();
      this.onStart();
    }
  };

  changeClock = () => {
    if (this.state.isWorkState) {
      this.setState({
        actualSeconds: this.state.breakInitialSeconds,
        isWorkState: false,
        isRunning: false,
      });
    } else {
      this.setState({
        actualSeconds: this.state.workInitialSeconds,
        isWorkState: true,
        isRunning: false,
      });
    }
  };

  onStart = () => {
    this.setState({
      isRunning: true,
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
      isRunning: false,
    });
  };

  onReset = () => {
    clearInterval(interval);
    this.setState({
      isRunning: false,
    });
    if (this.state.isWorkState) {
      this.setState(
        (prevState) => (prevState.actualSeconds = prevState.workInitialSeconds)
      );
    } else {
      this.setState(
        (prevState) => (prevState.actualSeconds = prevState.breakInitialSeconds)
      );
    }
  };

  handleReset = () => {
    if (
      (this.state.isWorkState &&
        this.state.actualSeconds === this.state.workInitialSeconds) ||
      (!this.state.isWorkState &&
        this.state.actualSeconds === this.state.breakInitialSeconds)
    ) {
      this.onReset();
    }
  };

  changeWorkValue = (minutes) => {
    if (minutes) {
      this.setState({
        workInitialSeconds: minutes * 60,
      });
      Keyboard.dismiss();
      this.handleReset();
    }
  };

  changeBreakValue = (minutes) => {
    if (minutes) {
      this.setState({
        breakInitialSeconds: minutes * 60,
      });
      Keyboard.dismiss();
      this.handleReset();
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
        <View style={Style.rowContainer}>
          <StartButton disabled={this.state.isRunning} onStart={this.onStart} />
          <StopButton disabled={!this.state.isRunning} onStop={this.onStop} />
          <ResetButton onReset={this.onReset} />
        </View>
        <WorkInput state={this.state} changeWorkValue={this.changeWorkValue} />
        <BreakInput
          state={this.state}
          changeBreakValue={this.changeBreakValue}
        />
      </View>
    );
  };
}
