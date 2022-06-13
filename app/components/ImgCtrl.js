import React from "react";
import { Image, StyleSheet } from "react-native";

export default function ImgCtrl() {
  return (
    <Image
      style={styles.image}
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1ZiSMqtboox7-aVmDjdEjGsKLUiWxIEZzg&usqp=CAU",
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});

//https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png
