import React from "react";
import { Text, View } from "react-native";
import Style from "./styles";

const Header = () => (
  <View style={Style.header}>
    <Text style={Style.title}>Cronometro Pomodoro</Text>
  </View>
);

export default Header;
