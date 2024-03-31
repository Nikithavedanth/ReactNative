import React from 'react';
import { View, Text, Pressable, Image, FlatList,Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { recipeList,colors } from '../constants';
import { useNavigation } from '@react-navigation/native';

const AddLikes = ({ likeItem }) => {
    const navigation = useNavigation()
  return (
    <View>
      <Text style={{marginTop:50, marginLeft:185, fontSize:20, fontWeight:'bold', marginBottom:20}}>Favourites</Text>
      <FlatList data={recipeList} renderItem={({item})=>(
        <Pressable onPress={()=> navigation.navigate('Recipe Details', {item:item})} style={{marginHorizontal:20,backgroundColor:colors.COLOR_LIGHT, ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            },
            android: {
              elevation: 4, // Use elevation for Android
            }  }), borderRadius:16, marginVertical:16,alignItems:'center', paddingHorizontal:14,paddingVertical:26 }}>
        <Image source={item.image} style={{width:150, height:150, resizeMode:'center'}}/>
        <Text>{item.name}</Text>
        <View style={{flexDirection:'row', marginTop:8}}>
            <Text>{item.time}</Text>
            <Text> | </Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:4}}>{item.rating}</Text>
                <FontAwesome name='star' size={16} color={colors.COLOR_PRIMARY}/>
            </View>
        </View>
        </Pressable>
     ) } 
     numColumns={2}
     columnWrapperStyle={{justifyContent:'space-between'}}
     showsVerticalScrollIndicator={false}/>
    </View>
  );
}

export default AddLikes;
