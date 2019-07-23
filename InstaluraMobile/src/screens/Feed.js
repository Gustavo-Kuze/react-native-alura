/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, FlatList, Platform } from "react-native";
import Post from "../components/Post";

class App extends React.Component {
  static navigationOptions = {
    title: 'Feed',
  };
  state = {
    fotos: []
  };

  componentDidMount() {
    fetch("https://instalura-api.herokuapp.com/api/public/fotos/rafael")
      .then(data => data.json())
      .then(fotos => {
        this.setState({ ...this.state, fotos });
      });
      console.warn(this.props.navigation.getParam("token", "token não encontrado"));
  }

  like = fotoId => {
    const foto = this.state.fotos.find(foto => foto.id === fotoId);
    let novaLista = [];
    if (!foto.likeada) novaLista = [...foto.likers, { login: "meuUser" }];
    else novaLista = foto.likers.filter(liker => liker.login !== "meuUser");

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    };

    let fotosAtualizadas = this.state.fotos.map(f =>
      f.id === fotoId ? fotoAtualizada : f
    );

    this.setState({ ...this.state, fotos: fotosAtualizadas });
  };

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={(item, i) => String(i)}
        data={this.state.fotos}
        renderItem={({ item }) => <Post foto={item} like={this.like} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 20 : 0
  }
});

export default App;
