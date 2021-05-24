import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text>Button</Text>
      <View style={styles.rightMenu}>
        <Text>Search</Text>
        <Text>Notifications</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rightMenu: {
    flex: -1,
    flexDirection: "row",
  },
});
