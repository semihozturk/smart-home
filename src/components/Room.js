import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Item from "./Item";


const Tab = createBottomTabNavigator();


export default function Room({ route, navigation }) {

  let room = {};
  if (route && route.params){
    room = route.params;
  }
  
  let itemsArray = [];
  if (room.items){
    itemsArray = Object.keys(room.items).map(key => (
      room.items[key]
    ));
  }
   

  return (
    <View>
      {room && (
        <Image
          source={require("../assets//images//livingroom.jpg")}
          style={styles.image}
        />
      )}
      {itemsArray.length > 0 && (
        <Tab.Navigator tabBarOptions={{
          labelStyle: {
            fontSize: 16,
            padding: 8,
          },
        }}>
          {
            itemsArray.map(item => (
              <Tab.Screen name={item.name} component={Item} initialParams={{}} />
            ))
          }

        </Tab.Navigator>
      )}
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