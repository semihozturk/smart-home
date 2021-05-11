import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default Kitchen = () => {
  return (
    <View>
      <Image
        source={require('../assets//images//kitchen.jpg')}
        style={styles.image}

      />

    </View>

  )
}

const styles = StyleSheet.create({
  image: {
    height: 450,
    width: 400,
    marginRight: 30,
  }
})