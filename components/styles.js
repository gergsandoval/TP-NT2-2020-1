import React from "react";
import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "green",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#add8e6",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  actualSeconds: {
    paddingTop: 10,
    fontSize: 30,
    textAlign: "center",
    right: 8,
  },
});

export default Style;
