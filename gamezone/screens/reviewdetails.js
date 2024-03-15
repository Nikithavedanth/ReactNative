import { Button } from "react-native";
import React from "react";
import { StyleSheet,Text, View } from "react-native";
import { Image } from "react-native";
import { globalStyles } from '../styles/global';
import { Card } from "../shared/card";
import { images } from "../styles/global";

export function ReviewDetails({route}){
    // const pressHandler = ()=>{
    //     navigation.goBack();
    // 
    
    const {title,body, rating}=route.params;
    // let imagePath;
    // switch (rating) {
    //     case 1:
    //         imagePath = require(`../assets/rating-1.png`);
    //         break;
    //     case 2:
    //         imagePath = require(`../assets/rating-2.png`);
    //         break;
    //     case 3:
    //         imagePath = require(`../assets/rating-3.png`);
    //         break;
    //     // Add more cases for other rating values as needed
    //     case 4:
    //         imagePath = require(`../assets/rating-4.png`); // Default image if rating is unknown
    //         break;
    //     case 5:
    //         imagePath = require(`../assets/rating-5.png`); // Default image if rating is unknown
    //         break;
    // }

    return(
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.titleText}>{ title }</Text>
            <Text style={globalStyles.titleText}>{ body }</Text>
            {/* <Text style={globalStyles.titleText}>{ rating}</Text> */}
            {/* <Button title='back to home screen'onPress={pressHandler} ></Button> */}
            <View style={styles.rating}>
                <Text style={globalStyles.titleText}>GameZone rating : </Text>
                {/* <Text>{rating}</Text> */}
                <Image source={images.ratings[rating]}/>
            </View>
            </Card>
        </View>
    )
}

const styles= StyleSheet.create({
    rating:{
        flexDirection: 'row',
        justifyContent:'center',
        paddingTop:16,
        marginTop: 16,
        borderTopWidth:1,
        borderTopColor:'#eee',
    }
})