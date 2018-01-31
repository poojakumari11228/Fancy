import React from 'react';
import {View,Text,StyleSheet,Image,Button,AsyncStorage} from 'react-native'

export default class Screen extends React.Component{
  static navigationOptions = {
    headerStyle:{backgroundColor:'#EF5350'},
    headerTintColor:'white' }

    pressed=async()=>{
      
      AsyncStorage.setItem('logedin','false');
      
      this.props.navigation.navigate('Screen');

    }
  render(){
    const {navigate} = this.props.navigation;
return(
 
  <View style={styling.mainContainer}>  
            
         <Text style={styling.txt}>CICHUB</Text>
   <View  style={styling.btnHome}> 
<Button title='Home' color='#EF5350' 
onPress={()=>navigate('Screen')}
/>
  </View>       
  
  <View style={styling.btnHome}>       
<Button title='Inbox' color='#EF5350'  
onPress={()=>navigate('ProfileScreen')}
/>
  </View>  

  <View style={styling.btnHome}>       
<Button title='Sent' color='#EF5350'  
onPress={()=>navigate('ProfileScreen')}
/>
  </View>
  
  <View style={styling.btnHome}>       
<Button title='Draft' color='#EF5350'  
onPress={()=>navigate('ProfileScreen')}
/>
  </View>         
  
  <View style={styling.btnHome}>       
<Button title='Logout' color='#EF5350'  
onPress={this.pressed}
/>
  </View>  
        </View> 
  
 
);  }}
const styling=StyleSheet.create({
mainContainer:{
    
  flex:1,
  flexDirection:'column',
    marginBottom:2,
    backgroundColor:'white',
  },

txt:{
  
  color:'#EF5350',
  fontSize:20,
  fontWeight:'bold',
},
btnHome:{
    
    marginTop:4,
    marginBottom:4,
    
    borderTopColor:'white'
},
});
//<Image source={require('./resource/logo.png')}/>