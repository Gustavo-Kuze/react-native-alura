/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  FlatList
} from "react-native";

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
        <View>
          <View style={styles.header}>
            <Image
              source={require("./resources/img/background.jpg")}
              style={styles.profilePic}
            />
            <Text>{item.usuario}</Text>
          </View>
          <Image
            source={require("./resources/img/background.jpg")}
            style={styles.postImg}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  profilePic: {
    height: 40,
    width: 40,
    margin: 10,
    borderRadius: 20
  },
  postImg: {
    height: Dimensions.get("screen").width,
    width: Dimensions.get("screen").width
  }
})

export default App;
