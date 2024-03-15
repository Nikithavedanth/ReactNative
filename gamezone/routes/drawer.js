import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./homestack";
import { AboutStack } from "./aboutstack";

const Drawer = createDrawerNavigator();
export function DrawerNavigation(){
    return(
        <NavigationContainer>
        <Drawer.Navigator >
          <Drawer.Screen name='Home Screen' component={HomeStack} />
          <Drawer.Screen name='About Screen' component={AboutStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}