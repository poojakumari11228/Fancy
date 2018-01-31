import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'

export default class Screen4 extends React.Component{
    static navigationOptions = {
        headerStyle:{backgroundColor:'#EF5350'}
    }
render(){
return(
  <View style={styling.mainContainer}>  
            
         
         <Text style={styling.txt}>FANCY</Text>
   
                    <TouchableOpacity>
            <View style={styling.btn1Container}>
            <Text style={styling.btn1}>SIGNUP VIA FACEBOOK</Text> 
            </View>
            </TouchableOpacity>
    

            <TouchableOpacity>
            <View style={styling.btn2Container}>
            <Text style={styling.btn2}>SIGNUP VIA TWITTER</Text> 
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={styling.btn3Container}>
            <Text style={styling.btn3}>SIGNUP WITH EMAIL</Text> 
            </View>
            </TouchableOpacity>
    
            <TouchableOpacity>
            <Text style={styling.txtAcc}>Already have an account?</Text> 
            </TouchableOpacity>
    
</View>

);}

}
const styling=StyleSheet.create({

mainContainer:{

    flex:1,
    flexDirection:'column',
   width:undefined,
    marginTop:2,
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
    fontWeight:'bold',
   fontSize: 15,
   color:'#3B5998',
},
btn1Container:{
    borderRadius:30,
    padding:12,
    paddingRight:50,
    paddingLeft:50,
    backgroundColor:'white',
    marginTop:50, 
},

btn2:{
    fontWeight:'bold',
    fontSize: 15,
    color:'#1DA1F2',
 },
 btn2Container:{
     borderRadius:30,
     padding:12,
     paddingRight:60,
     paddingLeft:60,
     backgroundColor:'white',
     marginTop:15,
 },
 

 btn3:{
    fontWeight:'bold',
    fontSize: 15,
    color:'#DB4437',
 },
 btn3Container:{
     borderRadius:30,
     padding:12,
     paddingRight:60,
     paddingLeft:60,
     backgroundColor:'white',
     marginTop:15,
 },
 txtAcc:{
     color:'white',
     marginTop:30,
 },
});