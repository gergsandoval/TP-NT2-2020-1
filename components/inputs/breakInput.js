import Style from "../styles";
import React from "react";
import { Text, View, Button, TextInput } from "react-native";

export default class BreakInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: "",
    };
  }

  render = () => (
    <View style={Style.inputContainer}>
      <Text style={Style.inputText}>Tiempo de Descanso (min): </Text>
      <TextInput
        style={Style.input}
        placeholder={(this.props.initialSeconds / 60).toString()}
        onChangeText={(value) =>
          this.setState({
            minutes: parseInt(value.replace(/[^0-9]/g, "")),
          })
        }
        keyboardType="numeric"
      />
      <Button
        onPress={() => this.props.changeBreakValue(this.state.minutes)}
        title="Aplicar"
        color="black"
      />
    </View>
  );
}