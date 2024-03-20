import { TouchableHighlight,StyleSheet,View,Text } from "react-native"

export function ColorCode(  {backgroundColor, onPress = f => f} ){
    return(
    <TouchableHighlight style={styles.button} onPress={()=>onPress(backgroundColor)} underlayColor="orange">
  
    <View style={styles.row}>
      <View style={[styles.sample, {backgroundColor}]}></View>
      <Text style={styles.buttonText}>{backgroundColor}</Text>
      
    </View>
  
  </TouchableHighlight>)
  }

  const styles = StyleSheet.create({
    button:{
        fontSize:30,
        margin:10,
        padding:10,
        borderWidth:2,
        borderRadius:120,
        alignSelf:'stretch',
        backgroundColor:'rgba(255,255,255,0.8)',
      },
    row:{
      flexDirection:'row',
      alignItems:'center',
    },
    sample:{
      height:20,
      width:20,
      margin:5,
      backgroundColor:'white',
      borderRadius:10,
    },
    buttonText:{
      // borderWidth:30,
      fontSize:20,
      fontWeight:'bold',
      // textAlign:'center',
    },
    
  });