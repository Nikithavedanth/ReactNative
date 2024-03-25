import React from "react";
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import PeopleItem from './peopleItem';



function PeopleList() {
    const navigationOptions = {
        tabBarIcon:({tintColor})=>(
            <Icon name={'user'} size={50} color={tintColor}/>
        )
    }
    return(
        <View style={styles.container}>
            <FlatList data={props.people} renderItem={(item)=><PeopleItem people={item}/>}/>
        </View>
    )
}

const mapStateToProps = state =>{
return{
    people:state.people
}
}

export default connect(mapStateToProps)(PeopleList);