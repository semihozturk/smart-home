import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


export default LivingRoom = (props) => {

  const items = props.route.params;

  return(
    <View>

      <Image 
        source={require('../assets//images//livingroom.jpg')} 
        style={styles.image}
        
      />    

      

      <Tab.Navigator>
        {
          Object.keys(items).map(key => (
            <Tab.Screen name={items[key].name} component={<Text>{items[key].id}</Text>} />
          ))
        }
        
      </Tab.Navigator>

    </View>
    
  )
}

const styles = StyleSheet.create({
  image: {
    height:450,
    width:400,
    marginRight:10,
    marginLeft:10,
    

  }
})