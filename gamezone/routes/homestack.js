import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/home';
import { ReviewDetails } from '../screens/reviewdetails';
import {Header} from '../shared/header';
// import { About } from '../screens/about';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();
export function HomeStack(){
  return (
    
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'grey', height:60},headerTintColor:'#444'}}>
        <Stack.Screen name='Home' component={Home} options={({route})=>{return {headerTitle:()=> <Header route={route} title='GameZone'/>}}}/>
        <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{title:'ReviewDetails'}}/>
      </Stack.Navigator>
    )
}

