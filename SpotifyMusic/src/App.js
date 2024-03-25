import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import {setupPlayer,addTrack} from '../musicPlayerServices';
// import { add } from 'react-native-track-player/lib/trackPlayer';
export default function App() {
  const [isPlayerReady,setIsPlayerReady] = useState(false)
  async function setup(){
    let isSetup = await setupPlayer()
    if(isSetup){
      await addTrack()
    }
    setIsPlayerReady(isSetup)
  }
  useEffect(()=>{
    setup()
  },[])

  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView>
      <StatusBar/>
    <View >
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
