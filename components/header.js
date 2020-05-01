import React from "react";
import { Text, View } from "react-native";
import style from "./styles";

const Header = () => (
  <View style={style.header}>
    <Text style={style.title}>Cronometro Pomodoro</Text>
  </View>
);

export default Header;
