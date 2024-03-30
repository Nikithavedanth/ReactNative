import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
  const handleLinkedInPress = () => {
    // Define the URL for the LinkedIn profile
    const linkedinUrl = 'https://www.linkedin.com/in/nikitha-vedant-madabhushi-0643b1182/';
   
    // Open the LinkedIn profile in the browser
    Linking.openURL(linkedinUrl);
    
  };

  const handleWhatsappInPress = () => {
    // Define the URL for the LinkedIn profile
    const whatsappurl = 'https://web.whatsapp.com/'
   
    // Open the LinkedIn profile in the browser
    Linking.openURL(whatsappurl);
    
  };
 

  return (
    <View>
      <View style={{alignItems:'center', marginTop:50}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}>Profile</Text>
      </View> 
      <View style={styles.card}>
        <View style={{marginRight:100, flexDirection:'row'}}> 
          <Image style={{width:200, height:200, borderRadius:50, marginHorizontal:10}} source={require('../../assets/images/Nikki.jpg')} />
          <View style={{flex:1}}>
            <Text style={{fontSize:30, justifyContent:'center', alignItems:'center'}}>Executive Chef</Text>
            <Text style={{fontSize:20, justifyContent:'center', alignItems:'center'}}>(15+ years of Professional Experience)</Text>
          </View>
        </View>
      </View>

      <View style={{marginTop:20, padding:50, backgroundColor:'purple'}}>
        <Text style={{fontSize:20, padding:20, backgroundColor:'orange',marginBottom:10,fontSize:20, fontWeight:'bold'}}>Here are the contact details of the user</Text>
        <Text style={{fontSize:18, padding:20, backgroundColor:'lightgreen',marginBottom:10,borderRadius:30}}>Email Id: nikithavedanth@gmail.com</Text>
        {/* Wrap the LinkedIn icon with Pressable and define the onPress action */}
        <Pressable onPress={handleLinkedInPress}>
          <Text style={{fontSize:18,padding:20,backgroundColor:'lightgreen',marginBottom:10,borderRadius:30}}>LinkedIn:<Ionicons style={{fontSize:30,justifyContent:'center',alignItems:'center'}} name='logo-linkedin'></Ionicons></Text>
        </Pressable>
        <Pressable onPress={handleWhatsappInPress} >
        <Text style={{fontSize:18,padding:20,backgroundColor:'lightgreen',borderRadius:30}}> Whatsapp:<Ionicons style={{fontSize:30,justifyContent:'center',alignItems:'center'}} name='logo-whatsapp'></Ionicons></Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  card: {
    paddingVertical:40,
    backgroundColor:'lightblue',
    borderBottomLeftRadius:70,
  }
});
