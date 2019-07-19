/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";
import emptyHeartImg from "../../resources/img/s2.png";
import likedImg from "../../resources/img/s2-checked.png";

const Post = props => {
  const [foto, setFoto] = useState(props.foto);

  const loadLikeImage = liked => (liked ? likedImg : emptyHeartImg);

  const renderLikesCount = () =>
    foto.likers.length > 0 ? (
      <Text style={styles.likes}>{foto.likers.length} curtidas</Text>
    ) : null;

  const renderComment = () =>
    foto.comentario !== "" ? (
      <View style={styles.comment}>
        <Text style={styles.commentTitle}>{foto.loginUsuario}</Text>
        <Text>{foto.comentario}</Text>
      </View>
    ) : null;

  return (
    <View>
      <View style={styles.header}>
        <Image source={{ uri: foto.urlPerfil }} style={styles.profilePic} />
        <Text>{foto.loginUsuario}</Text>
      </View>
      <Image source={{ uri: foto.urlFoto }} style={styles.postImg} />
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => setFoto({ ...foto, likeada: !foto.likeada })}
        >
          <Image source={loadLikeImage(foto.likeada)} style={styles.likeImg} />
        </TouchableOpacity>
        {renderLikesCount()}
        {renderComment()}
      </View>
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
  },
  likeImg: {
    marginBottom: 10,
    width: 40,
    height: 40
  },
  footer: {
    margin: 10
  },
  likes: {
    fontWeight: "bold"
  },
  comment: {
    flexDirection: "row"
  },
  commentTitle: {
    fontWeight: "bold",
    marginRight: 5
  }
});

export default Post;
