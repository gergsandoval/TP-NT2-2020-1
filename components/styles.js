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
  rowContainer: {
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
  input: {
    borderWidth: 1,
    marginRight: 20,
    width: "20%",
    height: "100%",
    textAlign: "center",
  },
  inputContainer: {
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },
  inputText: {
    fontSize: 15,
    textAlignVertical: "center",
  },
});

export default Style;
