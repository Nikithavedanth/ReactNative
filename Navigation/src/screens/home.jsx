import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button title='Go to Details' 
    // 
    // onPress={()=>navigation.navigate("Details")} 

    onPress={()=>navigation.push('Details',{
        productId:'86'
    })}
    >

      </Button>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    smallText:{
        color:'black'
    }
})
