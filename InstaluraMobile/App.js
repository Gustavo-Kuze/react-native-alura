/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { StyleSheet, FlatList } from "react-native";
import Post from "./src/components/Post";

class App extends React.Component {
  state = {
    fotos: []
  }
  
  componentDidMount(){
    fetch("https://instalura-api.herokuapp.com/api/public/fotos/rafael")
    .then(data => data.json())
    .then(fotos => {
      this.setState({...this.state, fotos})
    });
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={(item, i) => String(i)}
        data={this.state.fotos}
        renderItem={({ item }) => <Post item={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

export default App;
