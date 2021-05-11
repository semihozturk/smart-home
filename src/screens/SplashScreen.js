import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Body, Title, Left, Right } from 'native-base';



const SplashScreen = ({ navigation }) => {
  // without flex:1, it will center on that row, not on whole page
  // if we write same screen name in navigate, it wont go anywhere, 
  // but if we use "push", instead of "navigate" then it will open same page like it was different page
  // if we use push, and write different screen in parenthesis, it will do the same as navigate

  // the header provided by stack navigator will automatically include a back button when its possible to go back from the active screen
  // if there is one screen in the navigation stack, there is no back button
  
  const [password, setPassword] = useState("5555");
  
  const CORRECT_PASSWORD = "5555";
  const onEnterPin = ()=>{ // no need to add password as parameter, it already defined as state, so it gets value from there
      if(password === CORRECT_PASSWORD) {
      
        navigation.navigate("Home");
      }
      else{
        Alert.alert("please check your password")
      }
  };

  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>Welcome</Title>
        </Body>
        <Right />
      </Header>
     
      
      
      <Content>
        <Form>
          <Item stackedLabel last>
            <Label>Enter Password</Label>
            <Input style={{ borderWidth: .1 }} onChangeText={(text) => setPassword(text)} />
          </Item>
          <Button block onPress={onEnterPin}> 
            <Text>Go Home Screen</Text>
          </Button>
        </Form>
      </Content>
    </Container>   
  )
}

export default SplashScreen;