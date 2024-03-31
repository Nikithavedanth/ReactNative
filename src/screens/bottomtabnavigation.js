import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipeListScreen from './recipelistscreen';
import { Ionicons } from '@expo/vector-icons';
import Login from '../components/login';
import { colors } from '../constants';
import SearchFilter from '../components/searchfilter';
import Profile from '../components/profile';
import RecipeCard from '../components/recipecard';
import AddLikes from '../components/addlikesview';
const Tab = createBottomTabNavigator();
const screenOptions={
    tabBarShowLabel:false,
    tabBarHideOnKeyboard:true,
    headerShown:false,
    tabBarStyle:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:70
    }
}
const BottomTabNavigation = () => {
   
  return (
    <Tab.Navigator initialRouteName='Recipe List' screenOptions={screenOptions}>
      <Tab.Screen name="Recipe List" component={RecipeListScreen} options={{tabBarIcon:({focused})=>{
        return <Ionicons name={focused ? 'home':'home-outline' } size={24} color={ colors.COLOR_PRIMARY}/>
      }}}/>
      <Tab.Screen name="Add Likes" component={AddLikes} options={{tabBarIcon:({focused})=>{
        return <Ionicons name={focused ?'fast-food':'fast-food-outline'} size={24} color={ colors.COLOR_PRIMARY}/>
      }}}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:({focused})=>{
        return <Ionicons name={focused ? 'person':'person-outline' } size={24} color={colors.COLOR_PRIMARY}/>
      }}}/>
     
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
