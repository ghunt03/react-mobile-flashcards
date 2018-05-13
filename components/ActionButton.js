import React from "react";
import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { blue, white, red } from "../utils/colors";
export default function ActionButton({
  text,
  onPress,
  backgroundColor = blue,
  textColor = white
}) {
  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.iosBtn, { backgroundColor }]}
      >
        <Text style={{ color: textColor }}>{text}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.androidBtn, { backgroundColor }]}
      >
        <Text style={{ color: textColor }}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  iosBtn: {
    borderRadius: 3,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  androidBtn: {
    margin: 5,
    padding: 10,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center"
  }
});
