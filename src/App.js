import React,{Component} from 'react';
import {Text ,View, StyleSheet,Image,TouchableOpacity,TextInput} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';

import Screen3 from'./component/Screen3';
import Screen2 from'./component/Screen2';
import Screen from'./component/Screen';
import Signup from'./component/Signup';
import ProfileScreen from'./component/ProfileScreen';
import DrawerScreen from './component/DrawerScreen';
export default class MyApp extends Component{
 
  
  render() {
  
    return (
      
      <AppNavigators/>
    );
  }
}
const appDrawer=DrawerNavigator({
  ProfileScreen:{screen:ProfileScreen},  
  //Screen:{    screen: Screen,},
},{
  contentComponent:props=><DrawerScreen{...props}/>
},
//{  contentOptions: {
  // activeTintColor: 'white',
   //backgroundColor:'#EF5350',
  //}
//},
);

 const AppNavigators=StackNavigator({ 
  Screen:{
    screen: Screen,
    
  },
  Screen2:{
    screen: Screen2,
    
  },

  Screen3:{
    screen: Screen3
  },
  Signup:{
    screen:Signup
  },
  ProfileScreen:{
    screen:appDrawer
  },

});

 