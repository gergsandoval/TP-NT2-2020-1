import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ControlButton from "./controlButton";

const ButtonsContainer = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={props.buttons}
        renderItem={({ item }) => (
          <ControlButton name={item.name} pressHandler={item.pressHandler} />
        )}
      />
    </View>
  );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    alignSelf: "center",
  },
});
