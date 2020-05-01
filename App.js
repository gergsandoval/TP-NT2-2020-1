import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonsContainer from "./components/buttonsContainer";
import Header from "./components/header";
import Clock from "./components/clock";

export default function App() {
  const workState = {
    workInitialState: 25 * 60,
    workActualState: 25 * 60,
    description: "work",
  };

  const breakState = {
    breakInitialState: 5 * 60,
    breakActualState: 5 * 60,
    description: "break",
  };

  const [initialTimer, setInitialTimer] = useState(workState.workInitialState);
  const [actualTimer, setActualTimer] = useState(workState.workActualState);
  const [description, setDescription] = useState(workState.description);

  let intervalId;

  const start = () => {
    this.intervalId = setInterval(() => {
      setActualTimer((prevActualTimer) => prevActualTimer - +1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(this.intervalId);
  };

  const reset = () => {
    setInitialTimer(workState.workInitialState);
    setActualTimer(workState.workActualState);
    setDescription(workState.description);
    clearInterval(this.intervalId);
  };

  const buttons = [
    { key: "1", name: "Iniciar", pressHandler: start },
    { key: "2", name: "Pausar", pressHandler: stop },
    { key: "3", name: "Reiniciar", pressHandler: reset },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Clock actualTimer={actualTimer} />
      <ButtonsContainer
        buttons={buttons}
        initialTimer={initialTimer}
        actualTimer={actualTimer}
        description={description}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
