import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./src/components/Checkbox";
import Color from "./src/utils/Color";

export default function App() {
  return (
    <View style={styles.container}>
      <Checkbox></Checkbox>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
