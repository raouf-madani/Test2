import React,{useState} from 'react';
import { StyleSheet,View,KeyboardAvoidingView,Text,Image,Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import {MaterialIcons,MaterialCommunityIcons} from "@expo/vector-icons";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const SignupScreen = props =>{

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [lastName,setLastName] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');

    return(
      <View style={styles.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={10}>
          <View style={{height:'20%'}}>
            <Image source={require('../../assets/images/wave6.png')} style={{width:400,height:'100%'}}/>
          </View>
          <View style={{height:'5%',justifyContent:'flex-end',flexDirection:'row',width:'100%'}}>
            <Button labelStyle={{color:'rgb(254,178,199)',fontFamily:'poppins-bold'}}>Client</Button>
            <Button labelStyle={{color:'grey',fontFamily:'poppins'}}  onPress={()=>props.navigation.navigate('SignupOwner')}>Coiffeur</Button>
          </View>
          <View style={{height:'45%',alignItems:'center',justifyContent:'center'}}>
          <View style={styles.mediumCart}>
          <View style={{width:'100%',paddingVertical:10}}>
                  <Input 
                    leftIcon={<Icon title = "email" name ='user' color='rgb(254,178,199)' size={23} />}
                    placeholder="  Nom Complet"
                    inputContainerStyle={{borderColor:'#87d4f2'}}
                    />
                  </View>
                  <View style={{width:'100%',paddingVertical:10}}>
                  <Input 
                    leftIcon={<MaterialCommunityIcons title = "email" name ='gender-male'color='rgb(254,178,199)' size={23} />}
                    placeholder=" Sexe"
                    inputContainerStyle={{borderColor:'#87d4f2'}}
                    />
                  </View>
                <View style={{width:'100%',paddingVertical:10}}>
                  <Input 
                    leftIcon={<MaterialIcons title = "email" name ='email'color='rgb(254,178,199)' size={23} />}
                    placeholder=" Adresse Email"
                    inputContainerStyle={{borderColor:'#87d4f2'}}
                    />
                  </View>
                <View style={{width:'100%',paddingVertical:10}}>
                <Input 
                leftIcon={<MaterialIcons title="lock" name ='lock' color='rgb(254,178,199)' size={23} />}
                placeholder=" Mot de Passe"
                inputContainerStyle={{borderColor:'#87d4f2'}}
                />
                </View>
            </View>
          </View>
          <View style={{height:'30%',alignItems:'center',justifyContent:'center'}}>
                  <Button
                  theme={{colors: {primary:'#87d4f2'}}} 
                  mode="contained"
                  labelStyle={{color:'white',fontFamily:'poppins',fontSize:20}}
                  contentStyle={{width:'100%'}}
                  style={{borderColor:'#87d4f2'}}
                  dark={true}
                  >
                  S'INSCRIRE
                  </Button>
                  <Text style={{fontFamily:'poppins',fontSize:18,color:'#87d4f2',paddingVertical:1}}>ou</Text>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../../assets/images/facebook.png')} style={{width:24,height:24,marginHorizontal:10}}/>
                    <Image source={require('../../assets/images/instagram.png')} style={{width:24,height:24,marginHorizontal:10}}/>
                  </View>
                  <View style={{justifyContent:'center',alignItems:'center',paddingTop:8,borderBottomWidth:1,borderBottomColor:'rgb(254,178,199)'}}>
                    <Text onPress={()=>props.navigation.navigate('Login')} style={{alignSelf:'center',fontFamily:'poppins',fontSize:12,color:'rgb(254,178,199)'}}>Avez-vous déjà un compte ?</Text> 
                  </View>
          </View>
        </KeyboardAvoidingView> 
      </View>

     );    
};

SignupScreen.navigationOptions= ()=>{
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
    backgroundColor: '#fff',
    width:'100%'
   },
   mediumCart:{
    width:'90%',
    height:'100%',
    paddingTop:25,
    borderTopColor:'grey',
    borderRightColor:'white',
    borderLeftColor:'white'
  }
});

export default SignupScreen;