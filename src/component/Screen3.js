import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity, TextInput, AsyncStorage,KeyboardAvoidingView} from 'react-native'

var logedin='false';

var data1;
var data2;
var data3;

let loginUE=[];
let loginPA=[];
let myArr='temp';
export default class Screen3 extends React.Component{
    constructor(){
        super();
        this.state={
            loginUserEm:'',
            loginPass:'',
        }
    }
    static navigationOptions = {
        headerStyle:{backgroundColor:'#EF5350'},
        headerTintColor:'white'
    }



    changeLoginUserEm(value){
        this.setState={
         loginUserEm:value,
        }
        loginUE=value;
        console.log(loginUE);
    }

    changeLoginPass(value){
        this.setState={
            loginPA:value,
        }
  loginPA=value;
  console.log(loginPA);
    }

    PressLogin= async() => {
        //checcking for stored async values         
 try{   
data1 = await AsyncStorage.getItem('name');

    console.log("stored name: " +data1);        
 }catch(error){
     Alert.alert('error');
 }
 try{   
    data2 = await AsyncStorage.getItem('email');
    
        console.log("stored email: " +data2);        
     }catch(error){
         Alert.alert('error');
     }
     try{   
       data3 = await AsyncStorage.getItem('password');
        
            console.log("stored passwod: " +data3);        
         }catch(error){
             Alert.alert('error');
         }
if(loginUE==='' || loginPA===''){
       alert("Enter username/Email and Password");
} else{
        if(loginUE===data1 || loginUE===data2){
               if(loginPA===data3){
     
        logedin='true';
         AsyncStorage.setItem('logedin',logedin);
         
    alert("loged in");
     this.props.navigation.navigate('ProfileScreen')
    
        
    } else{alert("Incorrect Password Try again!");}
        } else{alert("Incorrect Email/Username or Password Try again! "); }
    }
}

render(){
    

    const {navigate} = this.props.navigation;
return(

<KeyboardAvoidingView behavior='padding' style={styling.mainContainer}>  
   
  
            
         <Text style={styling.txt}>FANCY</Text>
           
         <TextInput style={styling.txtip}
         placeholder='Username/Email'
         placeholderTextColor='white'
         underlineColorAndroid='white'
         underlineColorios='white'
          onChangeText={(value)=>this.changeLoginUserEm(value)}                           
              />             
     <TextInput style={styling.txtip}  
      placeholder='Password'
     placeholderTextColor='white'
     secureTextEntry={true} 
     underlineColorAndroid='white'
     underlineColorios='white'
      onChangeText={(value)=>this.changeLoginPass(value)}                                 
               />
               
            <TouchableOpacity
            onPress={this.PressLogin} 
              >
            <View style={styling.btn2Container}>
            <Text style={styling.btn2}>LOGIN</Text> 
            </View>
            </TouchableOpacity>
              

</KeyboardAvoidingView >

);

}
}

const styling=StyleSheet.create({

    btn2:{
        fontSize: 25,
        color:'white',
     },
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
txtip:{
    color:'white',
    marginRight:25,    
    width:300,
    alignItems:'center',
    padding:10,
    fontSize:18,
    marginTop:8,
    marginBottom:8,
   
    
}, 

});