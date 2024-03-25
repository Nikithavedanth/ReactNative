import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import ProductItem from '../components/productitem';
import Separator from '../components/separator';
import { PRODUCTS_LIST } from '../data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>
const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList data={PRODUCTS_LIST} keyExtractor={
        item =>item.id
      }  ItemSeparatorComponent={Separator} renderItem={({item})=>(
        <Pressable onPress={()=>{
            navigation.navigate('Details',{
                product:item
            })
        }}><ProductItem product={item}></ProductItem></Pressable>
      )}/>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    
        padding: 12,
        backgroundColor: '#FFFFFF',
      },
})
