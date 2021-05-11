import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Item (props) {
  const properties = props.route.params;
  return (
    <View>
      <Text>{properties.deneme2}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  image: {
    height: 450,
    width: 400,
    marginRight: 10,
    marginLeft: 10,


  }
})