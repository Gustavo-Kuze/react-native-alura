import React, { Component } from "react";
import { View, TextInput, StyleSheet, Dimensions, Button, Text } from "react-native";

const width = Dimensions.get("screen").width;

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>App Instalura</Text>
        <View style={styles.form}>
          <TextInput
            placeholder="Usuário..."
            onChangeText={text => this.setState({ usuario: text })}
            style={styles.input}
          />

          <TextInput
            placeholder="Senha..."
            onChangeText={text => this.setState({ senha: text })}
            style={styles.input}
          />
          <Button title="Login" onPress={() => console.warn("bah!")} />
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  form: {
    width: width * 0.8
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  appName: {
    fontWeight: "bold",
    fontSize: 26
  }
});
