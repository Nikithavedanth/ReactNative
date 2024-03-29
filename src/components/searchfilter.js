import React, { useState } from 'react';
import { View, Text, TextInput, Platform, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { recipeList } from '../constants';

const SearchFilter = ({ icon, placeholder }) => {
  const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [inputText, setInputText] = useState('');
  

  const handleTextChange = (text) => {
    setInputText(text);
    filterRecipes(text);
  }

  const filterRecipes = (text) => {
    const filtered = recipeList.filter(recipe =>
      recipe.name.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };
  return (
    <View>
      <View style={{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        paddingVertical: 16,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginVertical: 16,
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
          },
          android: {
            elevation: 4, // Use elevation for Android
          },
        })
      }}>
        <TouchableOpacity>
          <FontAwesome name={icon} size={20} color='#f96163' />
        </TouchableOpacity>
        <TextInput
          placeholder={placeholder}
          onChangeText={handleTextChange}
          value={inputText}
          style={{ fontSize: 16, paddingLeft: 8, color: '#808080', flex: 1 }}
        />
      </View>

    
      <FlatList
        data={filteredRecipes}
        renderItem={({ item }) => <Text>{item.name}</Text>} 
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default SearchFilter;
