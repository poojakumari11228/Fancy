import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, AsyncStorage} from 'react-native'

let user='';
export default class ProfileScreen extends React.Component{
  static navigationOptions = {
    headerStyle:{backgroundColor:'#EF5350'},
    headerTintColor:'white'
}


render(){

               
       
    const {navigate} = this.props.navigation;
return(
  <View style={styling.mainContainer}>  
       
       <Text style={styling.txt}>ProfileScreen </Text>    
          
</View>

);}

}
const styling=StyleSheet.create({

mainContainer:{
    
    flex:1,
    flexDirection:'column',
    marginBottom:2,
    justifyContent:'center',
    alignItems:'center' ,
    backgroundColor:'#EF5350',
 
 

},
txt:{
  
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },

});