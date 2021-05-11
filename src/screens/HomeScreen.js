import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Button, View } from 'native-base';
import React, { useEffect, useState } from "react";
import Room from '../components/Room';
import { Text } from "react-native";
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
          items: newRoom.items
        });
        setRoomList(roomListState);
      }
    }
  },[route]);

  return (
    <>
      <Button onPress={() => {
        navigation.navigate("ItemsModal");
      }}>
        <Text>Add new room</Text>
      </Button>

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