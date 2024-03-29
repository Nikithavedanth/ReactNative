import React, { useState, useRef } from "react";
import { StyleSheet,View, Text, TextInput, Button } from "react-native";

export function ColorForm({onNewColor=f=>f}){
    const [inputValue, setValue]= useState('');
    const input =useRef();
    return(
        <View style={styles.container}>
           <TextInput ref={input} style={styles.txtInput} autoCapitalize="none" value={inputValue} onChangeText={setValue} placeholder="enter a color"></TextInput>
           <Button title="add"onPress={()=>{
            input.current.blur();
            onNewColor(inputValue);
            console.log(`add value ${inputValue}`)
            setValue('')}}></Button>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
    },
    txtInput:{
        flex:1,
        borderWidth:2,
        fontSize:20,
        margin:5,
        borderRadius:5,
        padding:5,
    }
})