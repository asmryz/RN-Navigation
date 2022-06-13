import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

const Box = ({ navigation }) => {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#3B6CD4",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
  },
});

export default Box;
