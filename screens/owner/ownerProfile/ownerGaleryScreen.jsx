import React,{useState} from 'react';
import { StyleSheet,View,Button,Text,TouchableOpacity,Image,Dimensions,ScrollView} from 'react-native';
import {MaterialIcons,MaterialCommunityIcons} from "@expo/vector-icons";


//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const OwnerGaleryScreen = props =>{

  const data=[{id:'1',fullname:'Angelina .J',imagePth:require('../../../assets/images/angelina.jpg'),phone:'0659853214',sexe:'Femme',email:'maxi@gmail.com',experience:5,imagePth2:require('../../../assets/images/angelina.png')},
             ]; 
    return(
   
    <View style={styles.container}>
      <View style={styles.firstCard}>
         <View style={styles.firstFirstCard}>
            <TouchableOpacity>
             <MaterialIcons title = "back" name ='arrow-back' color='white' size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
             <Text style={{fontFamily:'poppins-bold',fontSize:30,color:'white',position:'relative',top:15}}>4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondFirstCard}>
             <Text style={{fontFamily:'poppins-bold',fontSize:20,color:'white'}}>TEMOINS</Text>
             <View style={{width:60,height:60,borderRadius:20}}>
                  <Image source={data[0].imagePth2} style={{width:'100%',height:'100%',borderRadius:40}} />
              </View>
          </View>
          <View style={styles.thirdFirstCard}>
             <View style={{borderRadius:20,width:'40%',overflow:'hidden'}}>
               <Button title='POPULAIRE' color='rgb(254,154,205)' style={{overflow:'hidden'}}/>
             </View>
             <View style={{borderRadius:20,width:'40%',borderColor:'white',overflow:'hidden'}}>
              <Button title='NOUVEAUX' color='rgb(224,178,199)' />
             </View>
          </View>
          <View style={styles.forthFirstCard}>
              <View style={{width:'15%'}}>
                <View style={{width:60,height:70,position:'relative',left:-5}}>
                    <Image source={require('../../../assets/images/chris.jpg')} style={{width:'100%',height:'100%',borderRadius:5}} />
                </View> 
              </View>
              <View style={{width:'60%',justifyContent:'flex-start',alignItems:'flex-start'}}>
                <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>Chris .K</Text>
                <Text style={{fontFamily:'poppins',color:'grey',fontSize:13}}>Vous etes doué Madame, Merci!</Text>
              </View>
              <View style={{width:'15%'}}>
                <MaterialCommunityIcons title = "like" name ='cards-heart' color={data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'} size={30} />
              </View>
          </View>
          <View style={styles.forthFirstCard}>
              <View style={{width:'15%'}}>
                <View style={{width:60,height:70,position:'relative',left:-5}}>
                    <Image source={require('../../../assets/images/fatima.jpg')} style={{width:'100%',height:'100%',borderRadius:5}} />
                </View> 
              </View>
              <View style={{width:'60%',justifyContent:'flex-start',alignItems:'flex-start'}}>
                <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>Fatima .Z</Text>
                <Text style={{fontFamily:'poppins',color:'grey',fontSize:13}}>Vous etes géniale, Merci!!!</Text>
              </View>
              <View style={{width:'15%'}}>
                <MaterialCommunityIcons title = "dislike" name ='heart-outline' color={data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'} size={30} />
              </View>
          </View>
          <View style={styles.forthFirstCard}>
              <View style={{width:'15%'}}>
                <View style={{width:60,height:70,position:'relative',left:-5}}>
                    <Image source={require('../../../assets/images/hareth.jpg')} style={{width:'100%',height:'100%',borderRadius:5}} />
                </View> 
              </View>
              <View style={{width:'60%',justifyContent:'flex-start',alignItems:'flex-start'}}>
                <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>Hareth .S</Text>
                <Text style={{fontFamily:'poppins',color:'grey',fontSize:13}}>Je vous note 5/5, Merci!!!</Text>
              </View>
              <View style={{width:'15%'}}>
                <MaterialCommunityIcons title = "dislike" name ='heart' color={data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'} size={30} />
              </View>
          </View>
          <View style={styles.forthFirstCard}>
              <View style={{width:'15%'}}>
                <View style={{width:60,height:70,position:'relative',left:-5}}>
                    <Image source={require('../../../assets/images/walid.jpg')} style={{width:'100%',height:'100%',borderRadius:5}} />
                </View> 
              </View>
              <View style={{width:'60%',justifyContent:'flex-start',alignItems:'flex-start'}}>
                <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>Raouf .M</Text>
                <Text style={{fontFamily:'poppins',color:'grey',fontSize:13}}>J'ai trop aimé ma nouvelle coiffure, Merci!</Text>
              </View>
              <View style={{width:'15%'}}>
                <MaterialCommunityIcons title = "dislike" name ='heart' color={data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'} size={30} />
              </View>
          </View>

      </View>
    </View>
    
     );    
};

OwnerGaleryScreen.navigationOptions= navData => {
    
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
    backgroundColor:'rgb(254,178,199)',
    alignItems:'center',
   },
    firstFirstCard:{
    width:'95%',
    height:'20%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  secondFirstCard:{
    width:'95%',
    height:'25%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end'
  },
  thirdFirstCard:{
    width:'95%',
    height:'25%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  forthFirstCard:{
    width:'95%',
    height:'35%',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    position:'relative',
    top:40, 
    shadowColor: 'black',
    shadowOpacity: 0.96,
    shadowOffset: {width: 0, height:2},
    shadowRadius: 10,
    elevation: 5,
    borderRadius:10,
    marginVertical:5,
    backgroundColor:'white'
  },
});

export default OwnerGaleryScreen;