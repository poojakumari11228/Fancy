import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'

export default class Screen1 extends React.Component{
    static navigationOptions = {
        headerStyle:{backgroundColor:'#EF5350'},
        headerTintColor:'white'
    }
render(){


    const {navigate} = this.props.navigation;
return(
  <View style={styling.mainContainer}>  
            
         <Text style={styling.txt}>FANCY</Text>
   
            <TouchableOpacity
            onPress={() => navigate('Signup')}
            >
            <View style={styling.btn1Container}>
            <Text style={styling.btn1}>SIGN UP</Text> 
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => navigate('Screen3')}
            >
            <View style={styling.btn2Container}>
            <Text style={styling.btn2}>LOGIN</Text> 
            </View>
            </TouchableOpacity>
    

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
    marginTop:150,
  color:'white',
  fontSize:40,
  fontWeight:'bold',

},
img:{
  width:30,
  height:30,
},
btn1:{
   fontSize: 25,
   color:'white',
},
btn1Container:{
    borderRadius:30,
    padding:5,
    paddingRight:50,
    paddingLeft:50,
    backgroundColor:'#BF360C',
    marginTop:50,
    borderWidth:2,
   borderColor:'white', 
},

btn2:{
    fontSize: 25,
    color:'white',
 },
 btn2Container:{
     borderRadius:30,
     padding:5,
     paddingRight:60,
     paddingLeft:60,
     backgroundColor:'#BF360C',
     marginTop:20,
     borderColor:'white',
     borderWidth:2,
 },
 

});