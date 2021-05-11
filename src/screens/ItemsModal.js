import React, { useState, useCallback } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Switch, FlatList } from "react-native";
import { DEFAULT_ITEMS } from "../Rooms";

const ItemsModal = ({ route, navigation }) => {

  const [roomName, setRoomName] = useState("");
  const [roomItems, setRoomItems] = useState(DEFAULT_ITEMS);
  
  const handleSubmit = useCallback(() => {
    if(!roomName) {
      Alert.alert("Please enter a room name");
    } else {
      const newRoom = {
        name: roomName,
        items: roomItems
      }
      navigation.navigate("Home", newRoom );
    }
  },[roomName]);


  const handleValueChange = useCallback((value,itemsAdd) => {
    let roomItemsState = roomItems;
    const newItemName = itemsAdd.name;
    let roomItem = roomItemsState.find(e=>e.name === newItemName);
    roomItem.active = value;
    setRoomItems(roomItemsState);
  },[]);


  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of the room</Text>
      <TextInput 
        style={styles.input} 
        value={roomName} 
        onChangeText={value => setRoomName(value)} 
        placeholder="Room name" 
      />
     
      {
        roomItems.map(roomItem => (
          roomItem.active && (
            <View style={styles.item}>
              <Text>{roomItem.name}</Text>
              <Switch
                value={roomItem.active}
                onValueChange={(selected) => { handleValueChange(selected, roomItem) }} />
            </View>
          )
        ))
      }

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </View>
  )
}

export default ItemsModal;

const styles = StyleSheet.create({
  input: {
    borderColor:"grey",
    borderWidth:1,
    padding: 10,
    borderRadius: 5,
    marginBottom:10,
  },
  container: {
    padding: 10,
    backgroundColor:"white",
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor:"teal",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
  },
  buttonText: { 
    color:"white",
    fontWeight:"bold",
  },
  name: {
    marginBottom:10,
  },
  item: {
    flexDirection: "row", // switch ile karşısındaki yazıyı yanyana getiriyor
    justifyContent: "space-between", // now they are opposite end
    alignItems:"center",
    padding: 10,
    borderBottomWidth:1,
    borderBottomColor:"grey",
  }
})