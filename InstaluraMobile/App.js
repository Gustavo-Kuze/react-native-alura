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
      style={{ marginTop: 20 }} 
      keyExtractor={(item, i) => String(i)}
      data={fotos}
      renderItem={({ item }) => (
        <View>
          <Text>{item.usuario}</Text>
          <Image
            source={require("./resources/img/background.jpg")}
            style={{
              height: Dimensions.get("screen").width,
              width: Dimensions.get("screen").width
            }}
          />
        </View>
      )}
    />
  );
};

// const styles = StyleSheet.create({

// })

export default App;
