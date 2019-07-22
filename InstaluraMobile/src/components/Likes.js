import React from "react";
import { Image, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import emptyHeartImg from "../../resources/img/s2.png";
import likedImg from "../../resources/img/s2-checked.png";
const Likes = props => {
  const loadLikeImage = liked => (liked ? likedImg : emptyHeartImg);
  let { foto } = props;
  const renderLikesCount = () => {
    if (!foto.likers) return null;
    return foto.likers.length > 0 ? (
      <Text style={styles.likes}>{foto.likers.length} curtidas</Text>
    ) : null;
  };

  return (
    <View>
      <TouchableOpacity onPress={() => props.like(foto.id)}>
        <Image source={loadLikeImage(foto.likeada)} style={styles.likeImg} />
      </TouchableOpacity>
      {renderLikesCount()}
    </View>
  );
};

export default Likes;

const styles = StyleSheet.create({
  likeImg: {
    marginBottom: 10,
    width: 40,
    height: 40
  },
  likes: {
    fontWeight: "bold"
  }
});
