import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Text,
  AsyncStorage
} from "react-native";

const width = Dimensions.get("screen").width;

class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {
    usuario: "",
    senha: "",
    message: ""
  };

  login = () => {
    const requestInfo = {
      method: "POST",
      body: JSON.stringify({
        login: this.state.usuario,
        senha: this.state.senha
      }),
      headers: {
        "Content-type": "application/json"
      }
    };

    fetch("https://instalura-api.herokuapp.com/api/public/login", requestInfo)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Não foi possível efetuar login");
      })
      .then(token => {
        AsyncStorage.setItem("token", token);
        AsyncStorage.setItem("usuario", this.state.usuario);

        this.props.navigation.navigate("Feed", { token });
        return AsyncStorage.getItem("token");
      })
      .catch(err => {
        this.setState({ ...this.state, message: err.message });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>App Instalura</Text>
        <View style={styles.form}>
          <TextInput
            placeholder="Usuário..."
            onChangeText={text => this.setState({ usuario: text })}
            style={styles.input}
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Senha..."
            onChangeText={text => this.setState({ senha: text })}
            style={styles.input}
            secureTextEntry={true}
          />
          <Button title="Login" onPress={this.login} />
        </View>

        <Text style={styles.message}>{this.state.message}</Text>
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
  },
  message: {
    marginTop: 15,
    color: "#e74c3c"
  }
});
