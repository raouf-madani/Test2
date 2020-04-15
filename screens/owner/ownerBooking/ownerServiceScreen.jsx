import React from 'react';
import { StyleSheet,View,Image, ScrollView,Platform,Text,TouchableOpacity} from 'react-native';
import Colors from '../../../constants/Colors';
import {MaterialIcons} from "@expo/vector-icons";
import ServiceCard from '../../../components/ServiceCard';


const data=[{id:'1',fullname:'Walid .M',imagePth:require('../../../assets/images/angelina.jpg'),phone:'0659853214',sexe:'Homme',email:'walid@gmail.com',experience:5,imagePth2:require('../../../assets/images/angelina.png'),place:'DM',placeTwo:'CC'},
]; 
const OwnerServiceScreen = props =>{


   
    return(
        <View style={styles.container}> 
         
           <View style={styles.firstCard}>
                <View style={styles.firstFirstCard}>
                    <TouchableOpacity>
                      <MaterialIcons title = "back" name ='arrow-back' color='white' size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('EditService')}}>
                      <MaterialIcons title = "edit" name ='edit' color='white' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%',height:'35%'}}></View>
                <View style={{width:'100%',height:'30%',justifyContent:'flex-end'}}>
                 <Image source={data[0].sexe === 'Femme' ? require('../../../assets/images/wave3.png'): require('../../../assets/images/wave5.png')} style={{height:'100%',width:'100%'}} />
                </View>
           </View>
           <View style={styles.secondCard}>
              <View style={{width:80,height:80,borderRadius:40,position:'relative',top:-50}}>
                  <Image source={data[0].sexe ==='Femme' ? require('../../../assets/images/angelina.png'):require('../../../assets/images/man.jpg')} style={{width:'100%',height:'100%',borderRadius:40}} />
              </View>
              <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20,position:'relative',top:-50}}>{data[0].fullname}</Text>
              <Text style={{fontFamily:'poppins',color:'grey',fontSize:13,position:'relative',top:-50}}>{data[0].phone}<Text style={{color:data[0].sexe === 'Femme' ? 'rgb(254,178,199)' : '#87d4f2'}}> | </Text>{data[0].email}</Text>
           </View>
           
           <ServiceCard
            sexe={data[0].sexe}
            place={data[0].place}
            typeOne='Style'
            priceOne='500'
            typeTwo={data[0].sexe === 'Homme'?'Barbe':'Style Mariage'}
            priceTwo='300'
            typeThree='Séchoir'
            priceThree='200'
           />
           <ServiceCard
            sexe={data[0].sexe}
            place={data[0].place}
            typeOne='Style'
            priceOne='500'
            typeTwo={data[0].sexe === 'Homme'?'Barbe':'Style Mariage'}
            priceTwo='300'
            typeThree='Séchoir'
            priceThree='200'
           />
           <ServiceCard
            sexe={data[0].sexe}
            place={data[0].place}
            typeOne='Style'
            priceOne='500'
            typeTwo={data[0].sexe === 'Homme'?'Barbe':'Style Mariage'}
            priceTwo='300'
            typeThree='Séchoir'
            priceThree='200'
           />
           
           
        </View>
          
     );    
};

OwnerServiceScreen.navigationOptions = navData => {
    
    return  {
    
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
      flex:1,
      backgroundColor:'white',
      width:'100%',
      alignItems:'center'
    },
    firstCard:{
        width:'95%',
        height:'30%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:data[0].sexe === 'Femme' ?'rgba(254,178,199,0.7)':'rgba(135,212,242,0.7)',
        alignItems:'center',
    },
    firstFirstCard:{
        width:'95%',
        height:'35%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end'
      },
     secondCard:{
        width:'95%',
        height:'20%',
        justifyContent:'flex-start',
        alignItems:'center',
    }
});

export default OwnerServiceScreen;