import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../utils/Color";
import Checkbox from "./Checkbox";

const Card = () => {
  const [completed, setCompleted] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        value={completed}
        style={{}}
        onPress={() => setCompleted(!completed)}
      />
      <Text>Todays task</Text>
    </View>
  );
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
