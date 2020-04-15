import React,{useState} from 'react';
import { StyleSheet,View,KeyboardAvoidingView,Text,Image,Dimensions} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import { Input } from 'react-native-elements';


//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const LoginScreen = props =>{

  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');

    return(
      <View style={styles.container}>
       <KeyboardAvoidingView  keyboardVerticalOffset={10}>
       <View style={{height:'15%'}}>
          <Image source={require('../assets/images/wave6.png')} style={{resizeMode:'cover', width:500,height:'100%'}}/>
        </View>
        <View style={{height:'15%',alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../assets/images/tahfifaLogo.png')} style={{resizeMode:'cover', width:280,height:116}}/>
        </View>
        <View style={{height:'35%',flexDirection:'row',justifyContent:'center',paddingVertical:15,width:'100%'}}>
           <View style={styles.mediumCart}>
               <View style={{width:'100%',paddingVertical:10}}>
                <Input 
                  leftIcon={<MaterialIcons title = "email" name ='email'color='rgb(254,178,199)' size={23} />}
                  placeholder=" email@adresse.com"
                  label="Email"
                  labelStyle={{color:'#87d4f2',fontFamily:'poppins-bold'}}
                  inputContainerStyle={{borderColor:'#87d4f2'}}
                  />
                </View>
              <View style={{width:'100%',paddingVertical:10}}>
               <Input 
               leftIcon={<MaterialIcons title="lock" name ='lock' color='rgb(254,178,199)' size={23} />}
               placeholder=" ******"
               label="Mote de Passe"
               labelStyle={{color:'#87d4f2',fontFamily:'poppins-bold'}}
               inputContainerStyle={{borderColor:'#87d4f2'}}
               />
               </View>
           </View>
        </View>
        <View style={{height:'15%',alignItems:'center'}}>
            <Text style={{fontFamily:'poppins-bold',fontSize:32}}>SE CONNECTER</Text>
            <Text style={{fontFamily:'poppins',fontSize:18,color:'#87d4f2'}}>ou</Text>
            <Text style={{fontFamily:'poppins',fontSize:15}}>S'authentifier avec </Text>
            <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:5}}>
              <Image source={require('../assets/images/facebook.png')} style={{width:32,height:32,marginHorizontal:10}}/>
              <Image source={require('../assets/images/instagram.png')} style={{width:32,height:32,marginHorizontal:10}}/> 
            </View>
        </View>
        <View style={{height:'20%'}}>
         <Image source={require('../assets/images/wave3.png')} style={{width:500,height:'100%'}}/>
        </View>
       </KeyboardAvoidingView> 
     </View>

     );    
};

LoginScreen.navigationOptions= ()=>{
  return {
    headerTransparent : true ,
    headerStyle:{
        backgroundColor: 'white'
    },
    headerBackTitle : " ",
    headerTitle: () => (
      <Image 
      resizeMode="cover"
      style={{
        width:150,
        height:40,
        resizeMode:'contain',
        alignSelf: 'center'}}
      
      />
    ),
    headerLeft:()=>null
  
  };
}

const styles= StyleSheet.create({
 container:{
    flex: 1,
    backgroundColor: 'white',
    width:'100%'
   },
   mediumCart:{
     width:'90%',
     height:'100%',
     padding:5,
     borderTopColor:'grey',
     borderRightColor:'white',
     borderLeftColor:'white',
     alignItems:'center',
     justifyContent:'center'
   }
});

export default LoginScreen;