import React,{useEffect} from 'react';
import { StyleSheet,View,Linking,Dimensions,Image,TouchableOpacity,Text} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../../../components/HeaderButton";
import {MaterialIcons} from "@expo/vector-icons";


//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const OwnerBookingsDetailScreen = props =>{

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */
  
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const bookingID = props.navigation.getParam('bookingID');
    const data=[{id:'1',fullname:'FATIMA .Z',imagePth:require('../../../assets/images/fatima.jpg'),place:'DM',creneauD:'13h',creneauF:'14h',statut:'Confirmée',date:'2020-03-16',phone:'0659853214',sexe:'Femme',price:'1500',email:'fatima@gmail.com'},
                {id:'2',fullname:'HARETH .S',imagePth:require('../../../assets/images/hareth.jpg'),place:'CO',creneauD:'14h',creneauF:'15h',statut:'Confirmée',date:'2020-03-16',phone:'0759753214',sexe:'Homme',price:'1000',email:'hareth@gmail.com'},
                {id:'3',fullname:'CHRIS .K',imagePth:require('../../../assets/images/chris.jpg'),place:'CO',creneauD:'15h',creneauF:'16h',statut:'Confirmée',date:'2020-03-17',phone:'0633853214',sexe:'Femme',price:'1500',email:'christina@gmail.com'},
                {id:'4',fullname:'RAOUF .M',imagePth:require('../../../assets/images/walid.jpg'),place:'DM',creneauD:'16h',creneauF:'17h',statut:'Confirmée',date:'2020-03-18',phone:'0640853214',sexe:'Homme',price:'1000',email:'raouf@gmail.com'}
                ];
    const currentBooking = data.find(booking => booking.id === bookingID);
 
    const month = ()=>{
        const array = currentBooking.date.split('-');
        const newArrayMonth = array.slice(1,2);
        if(newArrayMonth.toString()=== '03'){
            return 'Mars';
        }else{
            return;
        }

    }
    
    useEffect(()=>{
    props.navigation.setParams({phoneNumber:currentBooking.phone});
    props.navigation.setParams({gender:currentBooking.sexe});
    },[currentBooking.phone,currentBooking.sexe]);
      
    return(
    
     <View style={styles.container}>
        <View style={{height:'15%'}}>
          <Image source={currentBooking.sexe === 'Femme' ? require('../../../assets/images/wave4.png') : require('../../../assets/images/wave6.png')} style={{width:500,height:'100%'}}/>
        </View>
        <View style={{height:'70%',width:'90%'}}>
          <TouchableOpacity style={styles.firstCard}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>{currentBooking.place === 'DM' ? 'A Domicile' : 'Chez Coiffeur'}</Text>
                <Text style={{fontFamily:'poppins',color:'grey',fontSize:13}}>Confirmée</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontFamily:'poppins',color:'grey',fontSize:13}}>Montant</Text>
                <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>{currentBooking.price+' DA'}</Text>     
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondCard}>
            <View style={{justifyContent:'space-around',flexDirection:'row',height:'40%'}}>
              <View style={{width:80,height:80,borderRadius:40}}>
                  <Image source={currentBooking.imagePth} style={{width:'100%',height:'100%',borderRadius:40}} />
              </View>
              <View>
                  <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>{currentBooking.fullname}</Text>
                  <Text style={{fontFamily:'poppins',color:'grey',fontSize:13}}>{currentBooking.phone}<Text style={{color:currentBooking.sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'}}> | </Text>{currentBooking.email}</Text>
              </View>
            </View>
            <View style={{alignItems:'flex-start',height:'60%',marginHorizontal:10}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialIcons title = "time" name ='access-time' color={currentBooking.sexe === 'Femme' ? 'rgb(254,178,199)': '#87d4f2'} size={30} />
                <Text style={{fontSize:14,fontFamily:'poppins',color:'grey',paddingLeft:10}}>{currentBooking.creneauD+' à '+currentBooking.creneauF}</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialIcons title = "note" name ='note' color={currentBooking.sexe === 'Femme' ? 'rgb(254,178,199)': '#87d4f2'} size={30} />
                <Text style={{fontSize:14,fontFamily:'poppins',color:'grey',paddingLeft:10}}>{currentBooking.fullname} a laissé une note ?</Text>
              </View> 
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialIcons title = "address" name ='place' color={currentBooking.sexe === 'Femme' ? 'rgb(254,178,199)': '#87d4f2'} size={30} />
                <Text style={{fontSize:14,fontFamily:'poppins',color:'grey',paddingLeft:10}}>Bab Khouikha, Rue 156 Naama</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <MaterialIcons title = "gps" name ='gps-fixed' color={currentBooking.sexe === 'Femme' ? 'rgb(254,178,199)': '#87d4f2'} size={30} />
                <Text style={{paddingLeft:10,fontSize:14,fontFamily:'poppins',color:currentBooking.sexe === 'Femme' ? 'rgb(254,178,199)': '#87d4f2'}}>Cliquez ici pour utiliser GPS</Text>
              </View>  
            </View>
          </TouchableOpacity>  
        </View>
        <View style={{height:'15%'}}>
          <Image source={currentBooking.sexe === 'Femme' ? require('../../../assets/images/wave3.png') : require('../../../assets/images/wave5.png')} style={{width:500,height:'100%'}}/>
        </View>
      </View>
    
    
     );    
};

OwnerBookingsDetailScreen.navigationOptions= navData => {
   const phoneN = navData.navigation.getParam('phoneNumber');
   const gender = navData.navigation.getParam('gender');
    return {
        headerRight : ()=>  
              (<HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                <Item title = "callCustomer" 
                  iconName = {Platform.OS === 'android' ? 'md-call' : 'ios-call'} 
                  color='white' 
                  onPress={()=>{
                    let phoneNumber = '';
    
                    if (Platform.OS === 'android') {
                      phoneNumber = `tel:${`${phoneN}`}`;
                    } else {
                      phoneNumber = `telprompt:${`${phoneN}`}`;
                    }
                
                    Linking.openURL(phoneNumber);
                  }}
                />
              </HeaderButtons>
            ),
            headerTitle:phoneN,
            headerTitleStyle:{
              fontFamily:'poppins',
              color: 'white'
            },
            headerStyle:{
                backgroundColor:gender === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'
            },
            headerBackTitle:" ",
            headerTintColor:'white'
    
    };

 };

const styles= StyleSheet.create({

container:{
  flex:1,
  backgroundColor:'white',
  justifyContent:'flex-start',
  alignItems:'center',
  width:'100%'
},
firstCard:{
  marginVertical:10,
  backgroundColor:'white',
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:5,
  borderRadius:10,
  shadowColor: 'black',
  shadowOpacity: 0.96,
  shadowOffset: {width: 0, height:2},
  shadowRadius: 10,
   elevation: 5,
   padding:10,
   height:'20%'
},
secondCard:{
  marginVertical:10,
  backgroundColor:'white',
  paddingHorizontal:5,
  borderRadius:10,
  shadowColor: 'black',
  shadowOpacity: 0.96,
  shadowOffset: {width: 0, height:2},
  shadowRadius: 10,
   elevation: 5,
   padding:10,
   height:'70%',
   overflow:'hidden'
}
});

export default OwnerBookingsDetailScreen;