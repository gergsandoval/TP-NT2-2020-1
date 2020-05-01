import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonsContainer from "./components/buttonsContainer";
import Constants from "expo-constants";
import Header from "./components/header";
import Clock from "./components/clock";

export default function App() {
  const clockState = {
    workInitialState: 25 * 60,
    breakInitialState: 5 * 60,
  };

  const [timer, setTimer] = useState(clockState.workInitialState);

  const start = (timer) => {
    timer--;
    setTimer(timer);
  };

  const stop = () => {
    console.log("pausar cronometro");
  };

  const reset = () => {
    console.log("reiniciar cronometro");
  };

  const buttons = [
    { key: "1", name: "Iniciar", pressHandler: start },
    { key: "2", name: "Pausar", pressHandler: stop },
    { key: "3", name: "Reiniciar", pressHandler: reset },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Clock timer={timer} />
      <ButtonsContainer buttons={buttons} timer={timer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
