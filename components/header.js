import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Cronometro Pomodoro</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "green",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
