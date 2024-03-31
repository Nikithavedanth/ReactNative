import React from 'react';
import { Image, View,Text, TouchableOpacity ,StyleSheet, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';

export function WelcomeScreen({navigation}) {
  return (
    <Swiper  showsButtons={true} 
    autoplay={true}
    >
  
      <ImageBackground style={{flex:1, alignItems:'center',justifyContent:'center', opacity:0.9}} resizeMode='cover' source={require('../../assets/images/bg3.jpeg')}>
      <Text style={{color:"black", fontSize:40, fontWeight:'bold', alignItems:'center', shadowColor: 'black',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 7,}}>Food Recipes</Text>
      <Text style={{color:"black", fontSize:30, fontWeight:'bold', alignItems:'center'}}>Slide further for exciting Recipes</Text>
      {/* <Text style={{fontSize:42, fontWeight:'bold',color:'#3c444c', marginTop:44, marginBottom:40,}}>Cook like a Pro Chef</Text> */}
      </ImageBackground>
   

    
      <ImageBackground style={{flex:1, alignItems:'center',justifyContent:'center',opacity:0.9}} resizeMode='cover' source={require('../../assets/images/bg4.jpeg')}>
      <Text style={{color:"black", fontSize:40, fontWeight:'bold',alignItems:'center',}}>Explore more for delicious recipes.....</Text>
      {/* <Text style={{fontSize:42, fontWeight:'bold',color:'#3c444c', marginTop:44, marginBottom:40,}}></Text> */}
      </ImageBackground>


    <View style={{flex:1, alignItems:'center'}}>
      <Image source={require('../../assets/images/welcome1.png')}/>
      <Text style={{color:"#f96163", fontSize:22, fontWeight:'bold'}}> 40K + Premium  Recipes</Text>
      <Text style={{fontSize:42, fontWeight:'bold',color:'#3c444c', marginTop:44, marginBottom:40,}}>Cook like a Pro Chef</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}style={{backgroundColor:'#f96163',borderRadius:18, paddingVertical:18,width:'80%',alignItems:'center'}}>
        <Text style={{fontSize:18, color:'#ffffff', fontWeight:'700'}}>Let's begin our tour</Text>
      </TouchableOpacity>
    </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 1000
  },
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

