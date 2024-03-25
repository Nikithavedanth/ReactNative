import React from "react";
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import { Icon } from "react-native-vector-icons/EvilIcons";
import * as actions from '../actions'



function CompanyList() {
    const navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name={'archive'} size={50} color={tintColor}/>
        )
    }
    return(
        <View style={styles.container}>
            <Text>Company Screens</Text>
        </View>
    )
}


export default connect(null, actions)(CompanyList);