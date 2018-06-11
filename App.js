import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getInsult } from "./helpers";
import Button from './Button';

export default class App extends React.Component {
  state = {
    currentInsult: getInsult()
  };

  getInsult = () => {
    this.setState({
      currentInsult: getInsult()
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.insult}>{this.state.currentInsult}</Text>
        <Button handleClick={this.getInsult} buttonText="INSULT" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center"
  },
  insult: {
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    padding: 20
  },
});
