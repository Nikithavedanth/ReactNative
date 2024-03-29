
import SearchFilter from './searchfilter';
import React from 'react';
import { View, Text, FlatList, Platform, Image, Pressable, SafeAreaView } from 'react-native';
import { dinner, colors } from '../constants';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const Dinner= () => {
    const navigation = useNavigation();
    
  return (
    <SafeAreaView style={{flex:1, marginBottom:100}}>
      <SafeAreaView style={{flexDirection:'row', marginHorizontal:16}}>
            <Pressable style={{flex:1, marginTop:40}} onPress={()=>navigation.goBack()}>
            <FontAwesome name={'arrow-circle-left'} size={28} style={{}} color='black' />
            
            </Pressable>
            {/* <FontAwesome name={'heart-o'} size={28} style={{marginTop:40}} color='black'/> */}
        </SafeAreaView>
    <View style={{flex:1,marginTop:20}}>
      <SearchFilter icon='search' placeholder='enter your favourite recipe'/>
   <View>
      <FlatList data={dinner} renderItem={({item})=>(
        <Pressable onPress={()=> navigation.navigate('Recipe Details', {item:item})} style={{backgroundColor:colors.COLOR_LIGHT, ...Platform.select({
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



    </View>
    </SafeAreaView>
  );
}

export default Dinner;
