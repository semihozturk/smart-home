import 'react-native-gesture-handler'; // react-navigation, must be on top
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from "./src/screens/SplashScreen.js";
import HomeScreen from "./src/screens/HomeScreen.js";
import ExampleScreen from './src/screens/ExampleScreen.js';
import Creater from './src/screens/Creator.js';
import ItemsModal from './src/screens/ItemsModal.js';


const Stack = createStackNavigator();

const App = () => {

  return (
    // name is whatever you write
    // initialRouteName is which screen you want as your initial
    // when I add title, it will write it as title, not whats written in "name"
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{}}>
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          //options={{title:"our intro"}}
          options={{headerShown:false}} // hiding Header for SplashScreen
        /> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Creator" component={Creater} />
        <Stack.Screen name="ItemsModal" component={ItemsModal} />

        <Stack.Screen name="Example" component={ExampleScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
};



export default App;
