import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import SearchFilter from '../components/searchfilter';
import CategoriesFilter from '../components/categoriesfilter';
import RecipeCard from '../components/recipecard';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{flex:1,marginTop:50, marginHorizontal:16}}>
     <Header headerText={'Hi, Nikitha'} headerIcon={'bell-o'}/>
     <TouchableOpacity><SearchFilter icon='search' placeholder='enter your favourite recipe'/></TouchableOpacity>
     <View style={{marginTop:22, }}>
        <Text style={{fontSize:22, fontWeight:'bold'}}> Categories</Text>
        <CategoriesFilter/>
     </View>

     <View style={{marginTop:22,flex:1, marginBottom:30}}>
        <Text style={{fontSize:22, fontWeight:'bold'}}> Popular Recipes</Text>
        <RecipeCard/>
     </View>
    </SafeAreaView>
  );
}

export default RecipeListScreen;

const styles = StyleSheet.create({

})