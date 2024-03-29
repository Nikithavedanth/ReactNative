import React, { useState } from 'react';
import { View, Text, ScrollView ,Platform, Pressable, TouchableOpacity } from 'react-native';
import { categoriesList, colors } from '../constants';
import { useNavigation } from '@react-navigation/native';

const CategoriesFilter = () => {
const navigation = useNavigation();
const [categories] = useState(categoriesList);
function CategoryChange(index){
  switch (categories[index].id) {
    case '01':
      navigation.navigate('Breakfast');
      break;
    case '02':
      navigation.navigate('Lunch');
      break;
    case '03':
      navigation.navigate('Dinner');
      break;
    case '04':
      navigation.navigate('Asian');
      break;
    case '05':
      navigation.navigate('Italian');
      break;
    case '06':
      navigation.navigate('Desserts');
      break;
    case '07':
      navigation.navigate('Vegetarian');
      break;
    case '08':
      navigation.navigate('Lunch');
      break;
        // Add cases for other categories as needed
    default:
      break;
}
}


  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            categories.map((category, index)=>{
                return (
                <TouchableOpacity  onPress={() => CategoryChange(index)} key={category.id} style={{backgroundColor:colors.COLOR_PRIMARY, marginRight:36, borderRadius:8, paddingHorizontal:16,paddingVertical:10,    ...Platform.select({
                    ios: {
                      shadowColor: 'black',
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 7,
                    },
                    android: {
                      elevation: 4, // Use elevation for Android
                    }  }) ,marginVertical:16}}>
                    <Text style={{color: index === category[index] && colors.COLOR_LIGHT, fontSize:18}}>{category.category}</Text>
                </TouchableOpacity>
            )})
        }
      </ScrollView>
    </View>
  );
}

export default CategoriesFilter;
