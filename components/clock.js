import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Clock = (props) => {
  return (
    <View>
      <Text style={styles.clock}>{props.actualTimer}</Text>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  clock: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
  },
});
