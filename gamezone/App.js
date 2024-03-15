import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font'; // Yes, you can still use expo-font even if you're not using Expo.
import { Home } from './screens/home';
import 'react-native-gesture-handler';
import { DrawerNavigation } from './routes/drawer';
import 'expo-dev-client';
const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (fontsLoaded) {
    return (
      <DrawerNavigation/>
    ); 
  }
};

export default App;
