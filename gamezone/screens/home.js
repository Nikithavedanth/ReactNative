import React, { useState } from "react";
import { StyleSheet,Text, View, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback,Keyboard } from "react-native";
import { globalStyles } from '../styles/global';
import { Card } from "../shared/card";
import {MaterialIcons} from '@expo/vector-icons';
import { ReviewForm } from "./reviewforms";

export function Home({navigation}){
    const [reviews, setReviews] = useState([
        {title:'Zelda, Breadth of Fresh Air',rating:5,body:'lorem ipsum',key:'1'},
        {title:'Gotta Catch The All(again)',rating:4,body:'lorem ipsum',key:'2'},
        {title:'Not So "Final" Fantasy',rating:3,body:'lorem ipsum',key:'3'}
    ])
    // const pressHandler=()=>{
    //     navigation.navigate('ReviewDetails')
    //     // navigation.push('ReviewDetails');
    // }
    const [modalOpen, setModalOpen] = useState(false);
    const addReview =(review)=>{
        review.key = Math.random().toString();
        setReviews((currentReviews)=>{
            return [review, ...currentReviews];
        })
        setModalOpen(false);
    }
    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <View style={styles.modalContent}>
                <MaterialIcons 
              name='close'
              size={24}
              style={{...styles.modalToggle,...styles.modalClose}}
              onPress={()=>setModalOpen(false)}
            />
                    <ReviewForm addReview={addReview}/>

                </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
              name='add'
              size={24}
              style={styles.modalToggle}
              onPress={()=>setModalOpen(true)}
            />
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            {/* <Button title="go to review dets" onPress={pressHandler}/> */}
            <FlatList
            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}>
                    <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    modalContent:{
        flex:1,
    },
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
     },
     modalClose:{
        marginTop:20,
        marginBottom:0,
     }
})

