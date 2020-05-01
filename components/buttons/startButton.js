import Style from "../styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const StartButton = (props) => (
  <TouchableOpacity
    style={Style.button}
    disabled={props.disabled}
    onPress={props.onStart}
  >
    <Text>Iniciar</Text>
  </TouchableOpacity>
);

export default StartButton;
