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
  View,
  Image,
  Dimensions,
  Text
} from "react-native";

const Post = (props) => {
  return (
    <View>
      <View style={styles.header}>
        <Image
          source={require("../../resources/img/background.jpg")}
          style={styles.profilePic}
        />
        <Text>{props.item.usuario}</Text>
      </View>
      <Image
        source={require("../../resources/img/background.jpg")}
        style={styles.postImg}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Post;
