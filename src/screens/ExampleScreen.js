import React from "react";
import { View, Text, Button } from "react-native";

const ExampleScreen = ({ navigation }) => {
  return(
    <View>
      <Text>Hello ExampleScreen</Text>
      <Button 
        title="Go to first page which is Intro"
        onPress = {() => navigation.popToTop()} // goes to first page, push("Intro") is different, yes it goes to first page but it opens another screen on stack
      />
    </View>
  )
}

export default ExampleScreen;