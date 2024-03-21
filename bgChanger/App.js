import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [randomBackground, setRandomBackground] =useState('#ffffff');
  const generateColor =()=>{
    const hexRange='0123456789ABCDEF'
    let color = "#"
    for (let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random()*16)]
    }
    setRandomBackground(color);
  }
  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
       <View style={[styles.container, {backgroundColor:randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View styles={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
       </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn:{
    borderRadius:12,
    border: 2,
    backgroundColor:'#6A1B4D',
    paddingVertical:10,
    paddingHorizontal:40,
  },
  actionBtnTxt:{
    fontSize:24,
    fontWeight:'bold',
    textTransform:'uppercase',
    color:'white',
    // backgroundColor:'#6A1B4D',
    backgroundColor:'#6A1B4D',
    paddingVertical:10,
    paddingHorizontal:40,
    borderRadius:12,
  },
});
