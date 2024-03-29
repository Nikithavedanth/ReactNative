import { FontAwesome } from '@expo/vector-icons';
import React,{useState} from 'react';
import { View, Text, Image, SafeAreaView, Pressable, ScrollView, TouchableOpacity } from 'react-native';

const RecipeDetailsScreen = ({navigation, route}) => {
    const {item} = route.params;
    const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLiked(!liked); // Toggle the liked state
  };
  return (
    <View style={{backgroundColor:item.color, flex:1}}>
        <SafeAreaView style={{flexDirection:'row', marginHorizontal:16}}>
            <Pressable style={{flex:1, marginTop:40}} onPress={()=>navigation.goBack()}>
            <FontAwesome name={'arrow-circle-left'} size={28}  color='black' />
            
            </Pressable>
            <TouchableOpacity onPress={handleLikePress}>
            <FontAwesome name={liked ? 'heart' : 'heart-o'} size={28} style={{marginTop:40}} color={liked ? 'red' : 'black'}/></TouchableOpacity>
        </SafeAreaView>
        <View style={{backgroundColor:'#ffffff', flex:1, marginTop:180, borderTopLeftRadius:56,borderTopRightRadius:56, alignItems:'center', paddingHorizontal:16}}>
            <View style={{
                // backgroundColor:'red',
                width:300, height:300, position:'absolute', top:-150}}>
                <Image source={item.image} style={{width:'100%', height:'100%', resizeMode:'contain'}}/>
            </View>
            <Text style={{marginTop:140, fontSize:28, fontWeight:'bold'}}>{item.name}</Text>
            <View style={{flex:1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{fontSize:20, marginVertical:16}}>{item.description}</Text>
            <View style={{flexDirection:'row', justifyContent:'space-between',
            
            // width:'100%',
         }}>
                <View style={{backgroundColor:'rgba(255,0,0,0.38)', 
                
                // paddingHorizontal:20, 
                paddingVertical:26, borderRadius:8, alignItems:'center', width:120}}>
                    <Text style={{fontSize:40}}>⏰</Text>
                    <Text style={{fontSize:20, fontWeight:400}}>{item.time}</Text>
                </View>
                <View style={{backgroundColor:'rgba(135,206,235,0.8)', 
                
                // paddingHorizontal:20, 
                paddingVertical:26, borderRadius:8, alignItems:'center', width:120}}>
                    <Text style={{fontSize:40}}>🥣</Text>
                    <Text style={{fontSize:20, fontWeight:400}}>{item.difficulty}</Text>
                </View>
                <View style={{backgroundColor:'rgba(255,165,0,0.48)', 
                
                // paddingHorizontal:20,
                paddingVertical:26, borderRadius:8, alignItems:'center', width:120}}>
                    <Text style={{fontSize:40}}>🔥</Text>
                    <Text style={{fontSize:20, fontWeight:400}}>{item.calories}</Text>
                </View>
            </View>

            <View style={{alignSelf:'flex-start', marginVertical:22}}>
                <Text style={{fontSize:22,fontWeight:'600', marginBottom:4}}>Ingredients:</Text>
                {
                    item.ingredients.map((ingredient)=>{
                        return(

                    <View key={ingredient} style={{flexDirection:'row', alignItems:'center', marginVertical:4}}>
                        <View style={{backgroundColor:'red',height:10, width:10, borderRadius:5}}></View>
                        <Text style={{fontSize:18,marginLeft:6}}>{ingredient}</Text>
                        </View>
                     ) })
                }
            </View>

            <View style={{alignSelf:'flex-start', marginVertical:22}}>
                <Text style={{fontSize:22,fontWeight:'600', marginBottom:4}}>Steps:</Text>
                {
                    item.steps.map((step, index)=>{
                        return(

                    <View key={step} 
                    // style={{flexDirection:'row', alignItems:'center', marginVertical:4}}

                    >
                        {/* <View style={{backgroundColor:'red',height:10, width:10, borderRadius:5}}></View> */}
                        <Text style={{fontSize:18,marginLeft:6, marginVertical:6}}>{`${index+1} ) ${step}`}</Text>
                        </View>
                     ) })
                }
            </View>
            </ScrollView>
            </View>
        </View>
    </View>
  );
}

export default RecipeDetailsScreen;
