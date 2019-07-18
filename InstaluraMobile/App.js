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
  Dimensions
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

const App = () => {
  return (
    <View>
      <Text>Teste</Text>
      <Image
        source={require("./resources/img/background.jpg")}
        style={{
          height: Dimensions.get("screen").width,
          width: Dimensions.get("screen").width
        }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({

// })

export default App;
