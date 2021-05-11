import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default Bathroom = () => {
  return (
    <View>
      <Image
        source={require('../assets//images//bathroom.jpg')}
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