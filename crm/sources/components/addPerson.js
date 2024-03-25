import React from "react";
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import { Icon } from "react-native-vector-icons/EvilIcons";
import * as actions from '../actions'



function AddPerson() {
    return(
        <View style={styles.container}>
            <Text>Add Person Screens</Text>
        </View>
    )
}


export default connect(null, actions)(AddPerson);