import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonsContainer from "./components/buttonsContainer";
import Constants from "expo-constants";
import Header from "./components/header";
import Clock from "./components/clock";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Clock />
      <ButtonsContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
