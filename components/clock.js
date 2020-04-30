import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Clock = () => {
  let minutesAndSeconds = "25:00";
  return (
    <View>
      <Text style={styles.clock}>{minutesAndSeconds}</Text>
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
