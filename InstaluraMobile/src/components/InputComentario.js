import React, { useRef, useState } from "react";
import sendImg from "../../resources/img/send.png";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

const InputComentario = props => {
  const [currentCommentValue, setCurrentCommentValue] = useState("");
  let inputComentario = useRef(null);

  const clearInput = () => {
    inputComentario.current.clear();
    setCurrentCommentValue("");
  };

  const onPressCallbak = () => {
    props.addComment(currentCommentValue);
    clearInput();
  };

  return (
    <View style={styles.commentBox}>
      <TextInput
        style={styles.input}
        placeholder="Adicione um comentário"
        ref={inputComentario}
        onChangeText={text => setCurrentCommentValue(text)}
      />
      <TouchableOpacity onPress={onPressCallbak}>
        <Image source={sendImg} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
};

export default InputComentario;

const styles = StyleSheet.create({
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
