import React from "react";
import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { Button } from "react-native-paper";



export default function Creater(props) {

  const [roomName, setRoomName] = useState(undefined);

  const createRoom = () => {
    

  }
  
    
  return (
    <View>
      <TextInput 
        onChangeText={(e)=> {
          setRoomName(e.target.value)}
        } 
        placeholder="Room Name">
          {"-"}
      </TextInput>
      <Button onPress={createRoom}>
        <Text>Add Room</Text>
      </Button>

    </View>
  )
}