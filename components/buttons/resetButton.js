import Style from "../styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ResetButton = (props) => (
  <TouchableOpacity style={Style.button} onPress={props.onReset}>
    <Text>Reiniciar</Text>
  </TouchableOpacity>
);

export default ResetButton;
