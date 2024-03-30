import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground,Button,TextInput,Pressable, TouchableOpacity } from 'react-native';
import bg from '../../assets/images/bg2.jpg';
const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userName,setUserName] = useState('');
  return (
    <View style={styles.container}>
    <ImageBackground source={bg} resizeMode='cover' style={styles.image}>
        
        <View style={styles.card}>
        <Text style={styles.text}>SignUp</Text>
    <View>
    <Text style={styles.TextField}>UserName:</Text>
      <TextInput style={styles.Input}name={userName} placeholder='enter the username'/>
      <Text style={styles.TextField}>Email ID:</Text>
      <TextInput style={styles.Input}name={email} placeholder='enter the email'/>
     
      <Text style={styles.TextField}>Password:</Text>
      <TextInput style={styles.Input} name={password}placeholder='enter the password'/>
      <Text style={styles.TextField}>Confirm Password:</Text>
      <TextInput style={styles.Input} name={password}placeholder='confirm the password'/>
      <Button title='SignUp'/>
      <View style={{flexDirection:'row'}}>
      <Text>already registered?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}> 
      <Text style={{textDecorationLine:'underline',marginHorizontal:155,fontWeight:'bold'}}>Login</Text>
      </TouchableOpacity>
      </View>
      
    </View>
    
    </View> 
  
    </ImageBackground>
    </View>
  );
}

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

export default SignUp;
