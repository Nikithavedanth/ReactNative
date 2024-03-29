import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {WelcomeScreen} from '../screens/welcomescreen';
import RecipeListScreen from '../screens/recipelistscreen';
import RecipeDetailsScreen from '../components/recipedetailsscreen';
import SignUp from '../components/signup';
import Login from '../components/login';
import BreakFast from '../components/dishes';
import SeaFood from '../components/seafood';
import Dinner from '../components/dinner';
import Lunch from '../components/lunch';
import Italian from '../components/italian';
import Asian from '../components/asian';
import Desserts from '../components/desserts.';
import Vegetarian from '../components/vegetarian';
// import PopularDishes from '../components/populardishes';
function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="login" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}></Stack.Screen>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='Register' component={SignUp}></Stack.Screen>
        <Stack.Screen name='Breakfast' component={BreakFast}></Stack.Screen>
        <Stack.Screen name='Lunch' component={Lunch}></Stack.Screen>
        <Stack.Screen name='Dinner' component={Dinner}></Stack.Screen>
        <Stack.Screen name='SeaFood' component={SeaFood}></Stack.Screen>
        <Stack.Screen name='Italian' component={Italian}></Stack.Screen>
        <Stack.Screen name='Asian' component={Asian}></Stack.Screen>
        <Stack.Screen name='Desserts' component={Desserts}></Stack.Screen>
        <Stack.Screen name='Vegetarian' component={Vegetarian}></Stack.Screen>
        <Stack.Screen name='Recipe List' component={RecipeListScreen}></Stack.Screen>
        <Stack.Screen name='Recipe Details' component={RecipeDetailsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack =createNativeStackNavigator();

export default AppNavigation;
const styles = StyleSheet.create({

})