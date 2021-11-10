import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import generateBoxShadowStyle from "../hooks/generateBoxShadowStyle";

const ResultsDetail = ({ result }) => {
  return (
    <View
      style={[
        styles.containerStyle,
        generateBoxShadowStyle(-2, 4, "#171717", 0.2, 3, 4, "#171717"),
      ]}
    >
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <View style={styles.contentContainerStyle}>
        <View style={{ flex: 1 }}>
          <Text style={styles.nameStyle}>{result.name}</Text>
          <View style={styles.categoriesStyle}>
            {result.categories.map((cat) => (
              <Text style={styles.categoryStyle} key={cat.alias}>
                {cat.title}
              </Text>
            ))}
          </View>
        </View>
        <View>
          <View style={styles.ratingContainerStyle}>
            <Text style={styles.ratingStyle}>{result.rating}</Text>
            <FontAwesome name="star" size={12} color="white" />
          </View>
          <Text style={styles.priceStyle}>{result.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: 380,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  imageStyle: {
    width: "100%",
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentContainerStyle: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoriesStyle: {
    flexDirection: "row",
  },
  categoryStyle: {
    fontSize: 14,
    marginRight: 5,
  },
  ratingContainerStyle: {
    backgroundColor: "#256A4E",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  ratingStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginRight: 5,
  },
  priceStyle: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});

export default ResultsDetail;
