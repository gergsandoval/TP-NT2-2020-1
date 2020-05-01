import Style from "../styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const StopButton = (props) => (
  <TouchableOpacity
    style={Style.button}
    disabled={props.disabled}
    onPress={props.onStop}
  >
    <Text>Pausar</Text>
  </TouchableOpacity>
);

export default StopButton;
