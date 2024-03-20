
import { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, ActivityIndicator, Button, Dimensions, Alert, Platform, ProgressBarAndroid, TouchableHighlight, FlatList } from 'react-native';
import { ColorCode } from './colorbutton';
import {ColorForm} from './colorform';
import { useColors } from './hooks';

export default function ColorList({navigation}) {
  // const onButtonPress=()=>{
  //   Alert.alert(`${new Date().toLocaleTimeString()} button press`)
  // }
  // const {height,width}=Dimensions.get('window');
  // const [backgroundColor, setBackgroundColor ]=useState('orange');
  const {colors, addColor} = useColors();
 
  return (
    <>
    <ColorForm onNewColor={addColor}/>
    <FlatList style={[styles.container]}
    data={colors}
    renderItem={({item})=>{
      return(
        <ColorCode key={item.id} backgroundColor={item.color} onPress={()=>navigation.navigate('Details',{color:item.color})}></ColorCode>
      )
    }}/>
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


    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    display:'flex',
    // justifyContent:'center',
    // alignItems:'center',
  },
  button:{
    fontSize:30,
    margin:10,
    padding:10,
    borderWidth:2,
    borderRadius:120,
    alignSelf:'stretch',
    backgroundColor:'rgba(255,255,255,0.8)',
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  },
  sample:{
    height:20,
    width:20,
    margin:5,
    backgroundColor:'white',
    borderRadius:10,
  },
  buttonText:{
    // borderWidth:30,
    fontSize:20,
    fontWeight:'bold',
    // textAlign:'center',
  },
  
});