import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Card from "./src/components/Card";
import Color from "./src/utils/Color";

export default function App() {
  return (
    <View style={styles.container}>
      <Card>Task for today</Card>
      <Card>Task for today</Card>
      <Card>Task for today</Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    padding: 10,
  },
});
