import React from 'react';
import { Image, View,Text, TouchableOpacity } from 'react-native';

export function WelcomeScreen({navigation}) {
  return (
    <View style={{flex:1, alignItems:'center'}}>
      <Image source={require('../../assets/images/welcome1.png')}/>
      <Text style={{color:"#f96163", fontSize:22, fontWeight:'bold'}}> 40K + Premium  Recipes</Text>
      <Text style={{fontSize:42, fontWeight:'bold',color:'#3c444c', marginTop:44, marginBottom:40,}}>Cook like a Pro Chef</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}style={{backgroundColor:'#f96163',borderRadius:18, paddingVertical:18,width:'80%',alignItems:'center'}}>
        <Text style={{fontSize:18, color:'#ffffff', fontWeight:'700'}}>Let's begin our tour</Text>
      </TouchableOpacity>
    </View>
  );
}


