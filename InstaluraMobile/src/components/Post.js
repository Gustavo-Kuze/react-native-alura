/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from "react";
import { StyleSheet, View, Image, Dimensions, Text } from "react-native";
import InputComentario from "./InputComentario";
import Likes from "./Likes";

const Post = props => {
  const [foto, setFoto] = useState({
    ...props.foto,
    likers: [],
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

  const addComment = commentValue => {
    if (commentValue) {
      const novaLista = [
        ...foto.comentarios,
        {
          id: commentValue,
          login: "meuUser",
          texto: commentValue
        }
      ];

      const fotoAtualizada = {
        ...foto,
        comentarios: novaLista
      };

      setFoto(fotoAtualizada);
    }
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
        <Likes like={like} foto={foto}/>
        {renderSubtitle()}
        {renderComments()}
        <InputComentario addComment={addComment} />
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
  footer: {
    margin: 10
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
