import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ControlButton from "./controlButton";

const ButtonsContainer = () => {
  const start = (props) => {
    console.log("iniciar cronometro");
  };

  const stop = (props) => {
    console.log("pausar cronometro");
  };

  const reset = (props) => {
    console.log("reiniciar cronometro");
  };

  const buttons = [
    { key: "1", name: "Iniciar", pressHandler: start },
    { key: "2", name: "Pausar", pressHandler: stop },
    { key: "3", name: "Reiniciar", pressHandler: reset },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={buttons}
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
    paddingHorizontal: 40,
  },
});
