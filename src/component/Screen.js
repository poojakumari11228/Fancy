import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,AsyncStorage} from 'react-native'

var status='false';
export default class Screen extends React.Component{
  static navigationOptions = {
    headerStyle:{backgroundColor:'#EF5350'},
    
}
move=async()=> {
  try{   
     status = await AsyncStorage.getItem('logedin');
    
        console.log("stored status: " +status);        
     }catch(error){
         Alert.alert('error');
     }
     if(status==='false'){
      this.props.navigation.navigate('Screen2');
    }else{this.props.navigation.navigate('ProfileScreen');}

}

  render(){
    const {navigate} = this.props.navigation;
return(
  <TouchableOpacity  style={styling.mainContainer}
      onPress={this.move}
      >
  <View >
 
         <Text style={styling.txt}>FANCY</Text>
        </View> 
        </TouchableOpacity>
 
);  }}
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
  marginTop:150,
  color:'white',
  fontSize:50,
  fontWeight:'bold',

},
img:{
  width:30,
  height:30,
},

});
// <Image source={require('./resource/logo.png')}/>  
            