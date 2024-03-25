import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { Button, View, Text } from 'react-native';
function Details({route}) {
    const {productId} = route.params;
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>
        Details: {productId}
      </Text>
      <Button title='Go to Home' 
    //   onPress={()=>navigation.navigate('Home')}
    onPress = {()=>navigation.goBack()}
    />
     <Button title='Go back to first Screen' 
    //   onPress={()=>navigation.pop(2)}
    onPress = {()=>navigation.pop()}
    />
    </View>
  );
}

export default Details;
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'black'
    }
})