import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ControlButton = (props) => (
  <TouchableOpacity onPress={props.pressHandler}>
    <Text style={styles.button}>{props.name}</Text>
  </TouchableOpacity>
);

export default ControlButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#add8e6",
    fontSize: 20,
  },
});
