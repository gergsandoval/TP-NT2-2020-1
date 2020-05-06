import Style from "./styles";
import React from "react";
import { Text } from "react-native";

const Timer = (props) => {
  const actualSecondsText =
    Math.floor(props.actualSeconds / 60)
      .toString()
      .padStart(2, "0") +
    ":" +
    (props.actualSeconds % 60).toString().padStart(2, "0");
  const stateDescription = props.isWorkState ? "Trabajo" : "Descanso";
  return (
    <Text style={Style.actualSeconds}>
      {stateDescription + ": " + actualSecondsText}
    </Text>
  );
};

export default Timer;
