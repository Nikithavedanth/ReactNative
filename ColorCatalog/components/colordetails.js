
import { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, ActivityIndicator, Button, Dimensions, Alert, Platform, ProgressBarAndroid, TouchableHighlight, FlatList } from 'react-native';
import Color from 'color';
export default function ColorDetails({route}) {
  const {color:name} = route.params
  const color=Color(name);
  textColor = {fontSize:30,color:color.negate().toString()}
;  // const onButtonPress=()=>{
  //   Alert.alert(`${new Date().toLocaleTimeString()} button press`)
  // }
  // const {height,width}=Dimensions.get('window');
 
 
  return (
    <View style={[styles.container, {backgroundColor:name}]}>
        <Text style={textColor}>{name}</Text>
        <Text style={textColor}>{color.rgb().toString()}</Text>
        <Text style={textColor}>{color.hsl().toString()}</Text>
        <Text style={textColor}>{color.luminosity()}</Text>
      {/* {Platform.OS='ios'&& <ProgressViewIOS progress={0.5}/>}
      {Platform.OS ==='android' && <ProgressBarAndroid styleAttr='Horizontal' indeterminate={false} color='blue' progress={0.5}/>}
      <ActivityIndicator size="large" color='#61DBFB'></ActivityIndicator>
      <Button title='click me'onPress={onButtonPress}/>
      <Text>{height}</Text>
      <Text>{width}</Text>
      <Text>{Platform.OS}</Text> */}
      {/* <ColorCode backgroundColor='red' onPress={setBackgroundColor}/>
      <ColorCode backgroundColor='yellow' onPress={setBackgroundColor}/>
      <ColorCode backgroundColor='green' onPress={setBackgroundColor}/>
      <ColorCode backgroundColor='purple' onPress={setBackgroundColor}/>
      <ColorCode backgroundColor='blue' onPress={setBackgroundColor}/>  */}


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
})