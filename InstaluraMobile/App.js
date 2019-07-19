/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {
  StyleSheet,
  Dimensions,
  FlatList
} from "react-native";
import Post from "./src/components/Post";

const App = () => {
  const fotos = [
    {
      id: 1,
      usuario: "Fulano"
    },
    {
      id: 2,
      usuario: "Ciclano"
    },
    {
      id: 3,
      usuario: "Juarez"
    }
  ];

  return (
    <FlatList
      style={styles.container} 
      keyExtractor={(item, i) => String(i)}
      data={fotos}
      renderItem={({ item }) => (
        <Post item={item}/>
      )}
    />
  );   
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
})

export default App;
