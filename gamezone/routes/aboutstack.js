import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens/home';
import { ReviewDetails } from '../screens/reviewdetails';
import {About} from '../screens/about';
import { Header } from '../shared/header';
// import { About } from '../screens/about';
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();
export function AboutStack(){
  return (

      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'grey', height:60},headerTintColor:'#444'}}>
        <Stack.Screen name='About' component={About} options={({route})=>{return {headerTitle:()=> <Header route={route} title="About GameZone"/>}}}/>
        {/* <Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{title:'ReviewDetails'}}/> */}
      </Stack.Navigator>
   )
}

