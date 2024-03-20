import React from 'react';
import { View, Text, StyleSheet,Linking, Image, TouchableOpacity } from 'react-native';

const ActionCards = () => {
    function openWebsite(websiteLink){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in JavaScript 21 -ES12
            </Text>
        </View>
        <Image source={{uri:'https://cdn.hashnode.com/res/hashnode/image/upload/v1710243650804/HSLZVksen.png?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp',}}
        style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={4}>
                Just like every year, JavaScript brings in new features. This year javascript is bringing 4 new features, which are almost in production rollout. I won't be wasting much more time and directly jump to code with easy to understand examples.
            </Text>
        </View>
        <View style={styles.footerContainer}>
        <TouchableOpacity onPress={()=>openWebsite('https://blog.learncodeonline.in/whats-new-in-javascript-21-es12')}>
            <Text style={styles.socialLinks}>
              Read more..
            </Text>
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>openWebsite('https://www.linkedin.com/in/nikitha-vedant-madabhushi-0643b1182/')}>
            <Text style={styles.socialLinks} >
              Follow me
            </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ActionCards;
const styles= StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    elevatedCard:{
        backgroundColor:'teal',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'blue',
        shadowOpacity:0.4,
    },
    card:{
        width:380,
        height:380,
        marginHorizontal:14,
        borderRadius:8,
        marginVertical:12,

    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    headerText:{
        color:'black',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:200,
    },
    bodyContainer:{
        padding:10,
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    socialLinks:{
        fontSize:16,
        color:'white',
        backgroundColor:'black',
        paddingHorizontal:30,
        paddingVertical:6,
        borderRadius: 6,
        textDecorationLine:"underline",
    },
})
