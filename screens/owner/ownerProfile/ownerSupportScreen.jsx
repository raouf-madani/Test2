import React from 'react';
import { StyleSheet,View,Image,Text,Linking,Dimensions} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../../components/HeaderButton";
import Colors from '../../../constants/Colors';


//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const OwnerSupportScreen = props =>{


    return(
      <View style={styles.container}>
        <View style={{height:'20%'}}>
          <Image source={require('../../../assets/images/wave6.png')} style={{width:500,height:'100%'}}/>
        </View>
        <View style={{height:'40%',alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../../../assets/images/tahfifaLogo.png')} style={{resizeMode:'cover', width:280,height:116}}/>
          <View style={{alignItems:'center'}}>
            <Text style={{fontFamily:'poppins-bold',paddingBottom:5,fontSize:17}}>Un problème technique ?</Text>
            <Text style={{fontFamily:'poppins'}}>Vous pouvez contacter notre équipe</Text>
            <Text style={{fontFamily:'poppins'}}>24/7 sur les plateformes au-dessous.</Text>
          </View>
        </View>
        <View style={{height:'15%',flexDirection:'row',justifyContent:'center',paddingVertical:15}}>
          <Image source={require('../../../assets/images/facebook.png')} style={{width:32,height:32,marginHorizontal:10}}/>
          <Image source={require('../../../assets/images/whatsapp.png')} style={{width:32,height:32,marginHorizontal:10}}/>
          <Image source={require('../../../assets/images/instagram.png')} style={{width:32,height:32,marginHorizontal:10}}/>
          <Image source={require('../../../assets/images/linkedin.png')} style={{width:32,height:32,marginHorizontal:10}}/>  
        </View>
        <View style={{height:'5%',alignItems:'center'}}>
            <Text style={{fontFamily:'poppins'}}>ayoungleader.com</Text>
            <Text style={{fontFamily:'poppins'}}>ayoungleader.com/tahfifa</Text>
        </View>
        <View style={{height:'20%'}}>
         <Image source={require('../../../assets/images/wave3.png')} style={{width:500,height:'100%'}}/>
        </View>
      </View>

     );    
};

OwnerSupportScreen.navigationOptions= navData => {
    
     return {
         headerRight : ()=>  
               (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                 <Item title = "callSupport" 
                   iconName = {Platform.OS === 'android' ? 'md-call' : 'ios-call'}
                   color= '#87d4f2'
                   onPress={()=>{
                     let phoneNumber = '';
     
                     if (Platform.OS === 'android') {
                       phoneNumber = 'tel:${06532458765}';
                     } else {
                       phoneNumber = 'telprompt:${06532458765}';
                     }
                 
                     Linking.openURL(phoneNumber);
                   }}
                 />
               </HeaderButtons>
               
             ),
             headerTitle:'Support',
             headerTitleStyle:{
               fontFamily:'poppins',
               color:Platform.OS === 'android' ? '#87d4f2' : Colors.background
             },
             headerStyle:{
                 backgroundColor:Platform.OS === 'android' ? 'white' : '#87d4f2'
             },
             headerTintColor:Platform.OS === 'android' ? '#87d4f2' : '#87d4f2',
             headerBackTitle : " "
     
     };
 
  };


const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'flex-start',
    width:'100%'
   },

});

export default OwnerSupportScreen;