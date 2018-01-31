import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,TextInput,AsyncStorage,KeyboardAvoidingView} from 'react-native'
let myData=[];
var ArrName=[];
var ArrRetPass=[];
var ArrPass=[];
var ArrEmail=[];
let condition=false;
export default class Signup extends React.Component{

    static navigationOptions = {
        headerStyle:{backgroundColor:'#EF5350'},
        headerTintColor:'white'
      
    }



    constructor() {
        super();
        this.state={
          textname:'',
          textpass:'',
          textRetpass:'',
          textEmail:'',
        }    
      }   

ChangeName(value){
 this.setState({
     textname:value,
    })
 
    
    AsyncStorage.setItem('name',value);
     ArrName=value;
 
 console.log("username: "+ArrName);
}

ChangeEmail(value){
    this.setState({
        textEmail:value,
    })
    AsyncStorage.setItem('email',value);
    ArrEmail=value;
    
    console.log("email: "+ArrEmail);
   }

ChangePass(value){
    this.setState({
        textpass:value,
    })
    AsyncStorage.setItem('password',value);
    ArrPass=value;
    console.log("Pass:"+value);
    }


   ChangeREtPass(value){
    this.setState({
        textRetpass:value,
    })
    ArrRetPass=value;
    console.log("retry:"+value);
   }

   pressSub= async ()=>{
              
        //searching '.com' and '@'  in email

console.log(this.state.textEmail);
       if( this.state.textEmail.endsWith(".com") && this.state.textEmail.includes("@")  ){  
       condition =true;
       console.log("condition: "+condition);
       }
       
       if(this.state.textname==='' || this.state.textpass ==='' || 
         this.state.textRetpass ===''|| this.state.textEmail==''){
          
        alert("Enter the required details!"); 
         }else if(ArrPass!==ArrRetPass){               // matching password
        alert('Password do not match try again!');
       }
       else if((this.state.textEmail.indexOf('@')!==this.state.textEmail.lastIndexOf('@')) //checking if "@" is more thn once
                     ||  condition!=true ){
                     alert('Invalid Email !');
       }
        else{alert("Your are registered!");
              condition=false; }


}


render(){
    
    const {navigate} = this.props.navigation;
  //var {params}= this.props.navigation.state;
 //   console.log(this.props.navigation.ArrName);

return(
  <View style={styling.mainContainer}>              
  
        <Text style={styling.txt}>FANCY</Text>
         <View style={styling.unameContainer}>
   <Text style={styling.txtinpt}>USER NAME </Text>
                    <TextInput style={{color:'white'}}
                          underlineColorAndroid='white'
                          underlineColorios='white'
                          
            onChangeText={(value)=> this.ChangeName(value)}    
                    >
            
            
            </TextInput>
    </View>
    <View style={styling.passContainer}> 
<Text style={styling.txtinpt}
  
>PASSWORD </Text>
               <TextInput  style={{color:'white'}} 
            
                      secureTextEntry={true}      
                     underlineColorAndroid='white'
                     underlineColorios='white'
                     //autoCapitalize='none'
               onChangeText={(value)=>this.ChangePass(value)}
           
               >
       
       </TextInput>
</View>

<View style={styling.passContainer}>
<Text style={styling.txtinpt}>RETRY PASSWORD </Text>


               <TextInput  
                          style={{color:'white'}}
                           secureTextEntry={true}   
                     underlineColorAndroid='white'
                     underlineColorios='white'
                     //autoCapitalize='none'
           onChangeText={(value)=>this.ChangeREtPass(value)}
                >
       
       </TextInput>
</View>



<View style={styling.emailContainer}> 
<Text style={styling.txtinpt}>EMAIL</Text>
               <TextInput  
                     style={{color:'white'}}
                     underlineColorAndroid='white'
                     underlineColorios='white'
                     autoCapitalize='none'
            onChangeText={(value)=>this.ChangeEmail(value)}
            >
           
       
       </TextInput>
</View>



     <TouchableOpacity
     onPress={this.pressSub}   >
<Text style={styling.btnSub}>Submit</Text>
            </TouchableOpacity>
    
  
</View>

);}

}
const styling=StyleSheet.create({

mainContainer:{
  
    flex:1,
    flexDirection:'column',
   width:undefined,
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
unameContainer:{
    padding:2,
    paddingRight:20,
    //paddingLeft:50,
    marginTop:5, 
},

 passContainer:{
   
     padding:2,
     paddingRight:20,
     marginTop:5,
 },
 

 emailContainer:{
     
     padding:2,
     paddingRight:20,
     marginTop:5,
 },

 txtinpt:{
    
     marginRight:130,
    fontWeight:'bold',
    fontSize: 15,
     color:'white',
     width:200,
 },
 
btnSub:{
    backgroundColor:'white',
    padding:10,
    marginTop:20,
    borderRadius:30,
    fontWeight:'bold',
   fontSize: 15,
   color:'#EF5350',
},
});