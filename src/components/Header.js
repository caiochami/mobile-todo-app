import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "../utils/Color";
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Icon name="rocket" size={25} color={Color.muted} />
        <View style={styles.rightMenu}>
          <Text>Search</Text>
          <Text>Notifications</Text>
        </View>
      </View>
      <View style={styles.greetingsContainer}>
        <Text style={[styles.greetingsText]}>What's Up User!</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    flex: -1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  rightMenu: {
    flex: -1,
    flexDirection: "row",
  },
  greetingsContainer: {
    flex: -1,
    justifyContent: "center",
    textAlign: "left",
  },
  greetingsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Color.primary,
  },
});
