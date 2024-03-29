import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export function Header({ title }) {
    // const navigation = useNavigation(); // Access navigation object using useNavigation hook

    // const openMenu = () => {
    //     navigation.openDrawer(); // Use navigation object to open drawer
    // }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            {/* <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} /> */}
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10,
    },
    headerTitle:{
        flexDirection:'row',
    }
});
