import React from "react";
import {View, Text, StyleSheet,useColorScheme} from 'react-native';

export function AppPro(){
    const isDarkMode = useColorScheme() === 'light'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode? styles.darkText:styles.whiteText}>Hello World!</Text>
        </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    whiteText:{
        color:'white',
    },
    darkText:{
        color:'black',
    }
})