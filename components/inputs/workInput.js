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

  render = () => (
    <View style={Style.inputContainer}>
      <Text style={Style.inputText}>Tiempo de Trabajo (min): </Text>
      <TextInput
        style={Style.input}
        placeholder="25"
        onChangeText={(value) =>
          this.setState({
            minutes: parseInt(value.replace(/[^0-9]/g, "")),
          })
        }
        keyboardType="numeric"
      />
      <Button
        onPress={() => this.props.changeWorkValue(this.state.minutes)}
        title="Aplicar"
        color="black"
      />
    </View>
  );
}
