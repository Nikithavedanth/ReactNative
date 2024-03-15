import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const ContactList = () => {
    const contacts= [
        {
            uid:1,
            name:'Nikitha Vedant Madabhushi',
            status:'Developing an Application',
            imageUrl:require('../assets/Nikki.jpg')
        },
        {
            uid:2,
            name:'Isha',
            status:'Developing an IOS Application',
            imageUrl:require('../assets/rome.jpg')
        },
        {
            uid:3,
            name:'Akshita',
            status:'Developing an REACT Application',
            imageUrl:require('../assets/icon.png')
        },
        {
            uid:4,
            name:'Megha',
            status:'Developing an Website',
            imageUrl:require('../assets/Nikki.jpg')
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {
            contacts.map(({uid,name,status,imageUrl})=>(
                <View key={uid} style={styles.userCard}>
                    <Image source={imageUrl} style={styles.userImage}/>
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))
        }
      </ScrollView>
    </View>
  );
}

export default ContactList;
const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:'20',
    },
    container:{
        paddingHorizontal:16,
        marginBottom:10,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'lightblue',
        padding:8,
        borderRadius:10,
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:60/2,
        marginRight:14,
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'black',
    },
    userStatus:{
        fontSize:12,
    },
})