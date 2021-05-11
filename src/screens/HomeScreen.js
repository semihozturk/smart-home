import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, View } from 'native-base';
import React, { useEffect, useState } from "react";
import Room from '../components/Room';
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { Rooms } from '../Rooms';

const Tab = createMaterialTopTabNavigator();

function HomeScreen({route, navigation}) {

  const [roomList, setRoomList] = useState(Rooms);

  useEffect(() => {
    const newRoom = route.params && route.params;
    if (newRoom) {
      if (!roomList.find(e => e.name === newRoom.name)) {

        let roomListState = roomList;
        roomListState.push({
          id: 9,
          name: newRoom.name,
          imageUrl: "../assets//images//livingroom.jpg", 
          items: newRoom.items.filter(item=>item.active)
        });
        setRoomList([...roomListState]);
      }
    }
  },[route]);

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={()=> {navigation.navigate("ItemsModal")}}>
        <Text style={styles.buttonText}>Add New Room</Text>
      </TouchableOpacity>
      
     {/*  <Button onPress={() => {
        navigation.navigate("ItemsModal");
      }}>
        <Text>Add new room</Text>
      </Button> */}

      <Tab.Navigator>
        {
          roomList.map(room => (
            <Tab.Screen name={room.name || "-"} component={Room} initialParams={room} />
          ))
        }
      </Tab.Navigator>
    </>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({

  button: {
    height: 40,
    backgroundColor: "teal",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  }}
)