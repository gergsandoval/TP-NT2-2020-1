import Style from "../styles";
import React from "react";
import { Text, View, Button, TextInput } from "react-native";

export default class WorkInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: "",
    };
  }

  pressHandler = (minutes) => {
    this.props.changeWorkValue(parseInt(minutes));
    this.setState((prevState) => ({ minutes: "" }));
  };

  render = () => (
    <View style={Style.inputContainer}>
      <Text style={Style.inputText}>Tiempo de trabajo (min): </Text>
      <TextInput
        style={
          this.props.state.isRunning
            ? [Style.input, Style.disabled]
            : Style.input
        }
        placeholder={(this.props.state.workInitialSeconds / 60).toString()}
        onChangeText={(value) =>
          this.setState((prevState) => ({
            minutes: value.replace(/[^0-9]/g, ""),
          }))
        }
        editable={!this.props.state.isRunning}
        keyboardType="numeric"
        maxLength={2}
        value={this.state.minutes}
      />
      <Button
        onPress={() => this.pressHandler(this.state.minutes)}
        title="Aplicar"
        color="black"
        disabled={this.props.state.isRunning}
      />
    </View>
  );
}
