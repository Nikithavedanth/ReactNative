import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color:'white'}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color:'white'}}>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color:'white'}}>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color:'white'}}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color:'white'}}>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text style={{color:'white'}}>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default ElevatedCards;
const styles=StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginTop:20,
},
card:{
    width:100,
    height:100,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    margin:8,
    borderRadius:4,
},
cardElevated:{
    backgroundColor:'#CAD5E2',
    elevation:4,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:'red',
    shadowOpacity:'0.4',
    shadowRadius:2,
},
container:{
    // flex:1,
    // flexDirection:'row',
    // justifyContent:'center',
    // alignItems:'center',
    // width:100,
    // height:100,
    // borderRadius:4,
    // margin:8,
    padding:8,
},
})