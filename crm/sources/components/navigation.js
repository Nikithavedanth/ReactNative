import React from 'react';
import { View } from 'react-native';
// import {createAppContainer,createBottomTabNavigator} from 'react-navigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import PeopleList from './peopleList';
import CompanyList from './companyList';
import AddPerson from './addPerson';

const Stack = createNativeStackNavigator()
export function TabNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='People' >
                <Stack.Screen name='People' component={PeopleList} ></Stack.Screen>
                <Stack.Screen name='AddPerson' component={AddPerson} ></Stack.Screen>
                <Stack.Screen name='Company' component={CompanyList} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


