import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import bg from '../../assets/images/bg.jpg';
const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState
    ('')
  return (
    <View style={styles.container}>
    <ImageBackground source={bg} resizeMode='cover' style={styles.image}>
        
        <View style={styles.card}>
        <Text style={styles.text}>Login</Text>
    <View>
       
      <Text style={styles.TextField}>Email ID:</Text>
      <TextInput style={styles.Input}name={email} placeholder='enter the email'/>
     
      <Text style={styles.TextField}>Password:</Text>
      <TextInput style={styles.Input} name={password}placeholder='enter the password'/>
      <Button title='Login'onPress={()=>navigation.navigate('Recipe List')}/>
      <Text>did not signup?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')}> 
      <Text style={{textDecorationLine:'underline'}}>SignUp</Text>
      </TouchableOpacity>
      
    </View>
    
    </View> 
  
    </ImageBackground>
    </View>
    
    
  );
}

export default Login;

const styles= StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'flex-end',
        // // alignItems:'center',
        // padding:50,
    
    
    },
    image:{
        flex: 1,
        justifyContent: 'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:50,
        textAlign:'center'
    },
    TextField:{
        marginHorizontal:30,
        textAlign:'center',
        fontWeight:'bold'
    },
    Input:{
        padding:5,
        borderWidth:1,
        marginBottom:10,
        
    },
    card:{
        padding:50,
        // backgroundColor:'lightblue',
    }
})
