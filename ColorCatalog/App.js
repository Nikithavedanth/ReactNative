import React from "react";
import ColorList from "./components/colorlist";
import ColorDetails from "./components/colordetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const {Navigator, Screen} = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name='Home' options = {{title:'Color List'}} component={ColorList}/>
        <Screen name='Details' options={{title:'Color Details'}}component={ColorDetails}/>
       
      </Navigator>
    </NavigationContainer>
  )
}