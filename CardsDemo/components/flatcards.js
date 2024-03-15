import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text  style={{color:'white'}}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text  style={{color:'white'}}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text  style={{color:'white'}}>Blue</Text>
        </View>
      </View>
    </View>
  );
}

export default FlatCards;
const styles= StyleSheet.create({
headingText:{
  fontSize:24,
  fontWeight:'bold',
  paddingHorizontal:8,
  marginTop:30,
  
},
container:{
  flex:1,
  flexDirection:'row',
  padding:8,
  // justifyContent:'center',
  // alignItems:'center',
},
card:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  width:100,
  height:100,
  borderRadius:4,
  margin:8,
},
cardOne:{
  backgroundColor:'#EF5354',
},
cardTwo:{
  backgroundColor:'#50DBB4',
},
cardThree:{
  backgroundColor:'#5DA3FA',
},
})