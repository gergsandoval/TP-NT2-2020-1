import React from "react";
import { Text, View } from "react-native";
import Style from "./styles";

const DebugInfo = (props) => (
  <View style={Style.debugInfo}>
    <Text>{"workInitialSeconds: " + props.state.workInitialSeconds}</Text>
    <Text>{"breakInitialSeconds: " + props.state.breakInitialSeconds}</Text>
    <Text>{"actualSeconds: " + props.state.actualSeconds}</Text>
    <Text>{"isWorkState: " + props.state.isWorkState}</Text>
    <Text>{"isRunning: " + props.state.isRunning}</Text>
  </View>
);

export default DebugInfo;
