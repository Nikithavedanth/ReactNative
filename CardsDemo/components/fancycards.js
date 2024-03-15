import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image style={styles.cardImage} source={require('../assets/rome.jpg')}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India. Built form red and pink sandstone, it is on the edge of the City Palace.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
    
  );
}

export default FancyCards;
const styles= StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        width:380,
        height:360,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:16,
    },
    cardElevated:{
        backgroundColor:'black',
        // color:'white',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        }
    },
    cardImage:{
        height:180,
        width:380,
        // borderRadius:10,
        marginBottom:0,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    cardBody:{
      flex:1,
      flexGrow:1,
      paddingHorizontal:12,
    },
    cardLabel:{
        color:'white',
        fontSize:14,
        marginBottom:6,
    },
    cardFooter:{
        color:'white',
    },
    cardTitle:{
        color:'white',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:4,
    },
    cardDescription:{
        color:'white',
        fontSize:12,
        marginBottom:12,
        flexShrink:1,
        marginTop:6,
    }
})