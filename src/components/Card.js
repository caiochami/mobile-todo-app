import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../utils/Color";
import Checkbox from "./Checkbox";

const Card = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: -1,
    flexDirection: "row",
    padding: 20,
    backgroundColor: Color.secondary,
    borderRadius: 10,
  },
});
