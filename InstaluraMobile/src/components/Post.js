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
  TouchableOpacity,
  TextInput
} from "react-native";
import emptyHeartImg from "../../resources/img/s2.png";
import likedImg from "../../resources/img/s2-checked.png";
import sendImg from "../../resources/img/send.png";

const Post = props => {
  const [foto, setFoto] = useState({
    ...props.foto,
    likers: [{}],
    comentarios: [
      {
        id: "1",
        login: "Rodiscleiton",
        texto: "Tu costumava ser bom, cara! Ta uma merda"
      },
      {
        id: "2",
        login: "Suzana",
        texto: "Simplesmente fantástica suas fotos! <3"
      }
    ]
  });

  const loadLikeImage = liked => (liked ? likedImg : emptyHeartImg);

  const renderLikesCount = () => {
    if (!foto.likers) return null;
    return foto.likers.length > 0 ? (
      <Text style={styles.likes}>{foto.likers.length} curtidas</Text>
    ) : null;
  };

  const renderSubtitle = () =>
    foto.comentario !== "" ? (
      <View style={styles.comment}>
        <Text style={styles.commentTitle}>{foto.loginUsuario}</Text>
        <Text>{foto.comentario}</Text>
      </View>
    ) : null;

  const like = () => {
    let novaLista = [];
    if (!foto.likeada) novaLista = [...foto.likers, { login: "meuUser" }];
    else novaLista = foto.likers.filter(liker => liker.login !== "meuUser");

    const fotoAtualizada = {
      ...foto,
      likeada: !foto.likeada,
      likers: novaLista
    };

    setFoto(fotoAtualizada);
  };

  const renderComments = () =>
    foto.comentarios.map(comentario => (
      <View key={comentario.id}>
        <Text style={styles.commentTitle}>{comentario.login}</Text>
        <Text style={styles.comment}>{comentario.texto}</Text>
      </View>
    ));

  return (
    <View>
      <View style={styles.header}>
        <Image source={{ uri: foto.urlPerfil }} style={styles.profilePic} />
        <Text>{foto.loginUsuario}</Text>
      </View>
      <Image source={{ uri: foto.urlFoto }} style={styles.postImg} />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => like()}>
          <Image source={loadLikeImage(foto.likeada)} style={styles.likeImg} />
        </TouchableOpacity>
        {renderLikesCount()}
        {renderSubtitle()}
        {renderComments()}
        <View
        style={styles.commentBox}
        >
          <TextInput
            style={styles.input}
            placeholder="Adicione um comentário"
          />
          <Image source={sendImg} style={styles.send} />
        </View>
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
  },
  input: {
    height: 40,
    flex: 1
  },
  send: {
    height: 30,
    width: 30
  },
  commentBox: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#999"
  }
});

export default Post;
