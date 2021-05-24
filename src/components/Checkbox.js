import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Checkbox = ({ value, onPress }) => {
  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      <Text>{value ? "Checked" : "Unchecked"}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  borderRadius: 10,
  borderColor: "#fff",
});
