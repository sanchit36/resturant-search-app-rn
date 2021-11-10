import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import generateBoxShadowStyle from "../hooks/generateBoxShadowStyle";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View
      style={[
        styles.backgroundStyle,
        generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 4, "#171717"),
      ]}
    >
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Resturant name, cuisine, or a dish"
        autoCapitalize="none"
        autoComplete={false}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#FFFFFF",
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    color: "red",
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
