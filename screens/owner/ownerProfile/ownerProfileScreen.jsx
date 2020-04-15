import React,{useState} from 'react';
import { StyleSheet,View,ScrollView,ImageBackground,TouchableOpacity,Text,Image,Alert,KeyboardAvoidingView,Dimensions,ActionSheetIOS,Picker} from 'react-native';
import StarRating from 'react-native-star-rating';
import {MaterialIcons,MaterialCommunityIcons} from "@expo/vector-icons";
import { Input } from 'react-native-elements';
import {Button} from 'react-native-paper';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const OwnerProfileScreen = props =>{

    const data=[{id:'1',fullname:'Angelina .J',imagePth:require('../../../assets/images/angelina.jpg'),phone:'0659853214',sexe:'Femme',email:'maxi@gmail.com',experience:5,imagePth2:require('../../../assets/images/angelina.png')},
               ]; 
     const [star,setStarCount] = useState({starCount:4});

     const onStarRatingPress= rating =>{
        setStarCount({...star,starCount:rating});
     }

    return(
    <View style={styles.container}>
        <View style={styles.firstCard}>
          <ImageBackground source={data[0].imagePth} style={styles.backgroundFirstCard} resizeMode='cover'>
          <View style={styles.secondFirstCard}>
            <TouchableOpacity>
             <MaterialIcons title = "menu" name ='menu' color={data[0].sexe ? 'rgb(254,178,199)':'#87d4f2'} size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('OwnerGalery')}}>
             <MaterialIcons title = "chat" name ='chat-bubble' color={data[0].sexe ? 'rgb(254,178,199)':'#87d4f2'} size={30} />
            </TouchableOpacity>
          </View>  
          <View style={styles.firstFirstCard}>
            <View style={{justifyContent:'space-around',flexDirection:'row',height:'60%'}}>
                <View style={{width:80,height:110}}>
                    <Image source={data[0].imagePth2} style={{width:'100%',height:'100%',borderRadius:10,marginTop:-60}} />
                </View>
                <View>
                    <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>{data[0].fullname}</Text>
                    <Text style={{fontFamily:'poppins',color:'grey',fontSize:13}}>{data[0].phone}<Text style={{color:data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'}}> | </Text>{data[0].email}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',height:'30%',width:'100%'}}>
                <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                  <StarRating
                    disabled={false}
                    maxStars={5}
                    rating={star.starCount}
                    selectedStar={(rating) => onStarRatingPress(rating)}
                    starSize={20}
                    fullStarColor={data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'}
                    emptyStarColor={data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'}
                  />
                  <Text style={{fontFamily:'poppins-bold',color:'gray',fontSize:14}}>Niveau</Text>
                </View>
                <View style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontFamily:'poppins-bold',color:'gray',fontSize:14}}><Text style={{fontFamily:'poppins-bold',color:data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2',fontSize:30}}>5</Text> ans</Text> 
                </View>
            </View>
          </View>
          </ImageBackground>
       </View>
       <View style={styles.secondCard}>
            <View style={{width:'100%',height:'20%'}}/>
            <View style={styles.secondSecondCard}>
              <View style={{width:'95%',height:'75%',justifyContent:'space-around',alignItems:'center'}}>
                 <View style={{width:'95%',height:'25%',borderRadius:10}}>
                   <Input 
                    leftIcon={<MaterialCommunityIcons title = "sexe" name ='gender-female'color={data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'} size={23} />}
                    placeholder=" Sexe"
                    inputContainerStyle={{borderColor:data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'}}
                    />
                 </View>
                 <View style={{width:'95%',height:'25%',}}>
                   <Input 
                    leftIcon={<MaterialIcons title = "localisation" name ='gps-fixed'color={data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'} size={23} />}
                    placeholder=" Votre Localisation"
                    inputContainerStyle={{borderColor:data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'}}
                    />
                 </View>
              </View>
              <View style={{width:'95%',height:'25%',alignItems:'center',justifyContent:'center'}}>
                 <Button
                    theme={{colors: {primary:data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'}}} 
                    mode="contained"
                    labelStyle={{color:'white',fontFamily:'poppins',fontSize:16}}
                    contentStyle={{width:'100%'}}
                    style={{borderColor:data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'}}
                    dark={true}
                    style={{marginTop:35}}
                  >
                  Enregistrer
                  </Button>
              </View>
            </View>
       </View>
    </View>

     );    
};


OwnerProfileScreen.navigationOptions = navData => {
    
    
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
};


const styles= StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white',
    width:'100%',
    height:'100%',
    alignItems:'center'
   },
   firstCard:{
     width:'95%',
     height:'50%',
     borderTopLeftRadius:30,
     borderTopRightRadius:30,
     shadowColor: 'black',
     shadowOpacity: 0.96,
     shadowOffset: {width: 0, height:2},
     shadowRadius: 10,
     elevation: 5,
    },
    backgroundFirstCard:{
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'space-between',
      borderTopLeftRadius:30,
      borderTopRightRadius:30, 
      overflow:'visible'
    },
    firstFirstCard:{
      height:'40%',
      width:'90%',
      backgroundColor:'white',
      borderRadius:10,
      position:'relative',
      top:50, 
      shadowColor: 'black',
      shadowOpacity: 0.96,
      shadowOffset: {width: 0, height:2},
      shadowRadius: 10,
      elevation: 5,
    },
    secondFirstCard:{
      width:'95%',
      height:'20%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'flex-end'
    },
    secondCard:{
      width:'95%',
      height:'50%',
      alignItems:'center',
    },
    secondSecondCard:{
      width:'90%',
      height:'70%',
      alignItems:'center'
    }
  
});

export default OwnerProfileScreen;