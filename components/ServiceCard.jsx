import React from 'react';
import { StyleSheet,View,Text,Dimensions,Platform,Image,TouchableOpacity} from 'react-native';



//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const ServiceCard = props =>{


    return(
     
        <View style={styles.thirdCard}>
        <View style={{height:'90%',width:'95%',borderRadius:10,elevation:2,shadowColor: 'black',shadowOpacity: 0.96,shadowOffset: {width: 0, height:2},shadowRadius: 10}}>
             <View style={{width:'100%',height:'20%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:5}}>
               <Text style={{fontFamily:'poppins-bold',fontSize:22,color:'black'}}>Mes Services</Text>  
               <View style={{width:80,height:80,alignItems:'center',justifyContent:'center',borderRadius:40,position:'relative',top:-10,backgroundColor:props.sexe ==='Femme' ?'rgb(254,178,199)' : '#87d4f2'}}>
                 <Text style={{fontFamily:'poppins-bold',fontSize:20,color:'white'}}>{props.place}</Text>
               </View>
             </View>
             <View style={{width:'100%',height:'65%',justifyContent:'center',alignItems:'center',paddingHorizontal:5}}>
                 <View style={{width:'90%',height:'33%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Image  source={props.sexe === 'Homme' ? require('../assets/images/barbershop.png'): require('../assets/images/woman.png')} style={{width:32,height:32}}/>
                    <Text style={{fontFamily:'poppins-bold',fontSize:17,color:'black'}}>{props.typeOne}</Text>
                    <Text style={{fontFamily:'poppins-bold',fontSize:15,color:'gray'}}>{props.priceOne+' DA'}</Text>
                 </View>
                 <View  style={{width:'90%',height:'33%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Image  source={props.sexe==='Homme' ? require('../assets/images/beard.png') : require('../assets/images/bride.png')} style={{width:32,height:32}}/>
                    <Text style={{fontFamily:'poppins-bold',fontSize:17,color:'black'}}>{props.typeTwo}</Text>
                    <Text style={{fontFamily:'poppins-bold',fontSize:15,color:'gray'}}>{props.priceTwo+' DA'}</Text>  
                 </View>
                 <View  style={{width:'90%',height:'33%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Image  source={require('../assets/images/dryer.png')} style={{width:32,height:32}}/>
                    <Text style={{fontFamily:'poppins-bold',fontSize:17,color:'black'}}>{props.typeThree}</Text>
                    <Text style={{fontFamily:'poppins-bold',fontSize:15,color:'gray'}}>{props.priceThree+' DA'}</Text>
                 </View>
             </View>
             <View style={{width:'100%',height:'15%',alignItems:'center',overflow:'visible',borderBottomEndRadius:10,borderBottomStartRadius:10}}>
                   <View style={{width:'90%',height:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                       <TouchableOpacity style={{borderBottomColor:'grey',borderBottomWidth:1}}>
                          <Text style={{fontFamily:'poppins',fontSize:12,color:'gray'}}>Modifier les additions</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style={{borderBottomColor:'grey',borderBottomWidth:1}}>
                          <Text style={{fontFamily:'poppins',fontSize:12,color:'gray'}}>Modifier les horaires</Text>
                       </TouchableOpacity>
                   </View>
             </View>
        </View>
     </View>
    );    
};


const styles= StyleSheet.create({
   
    thirdCard:{
      width:'95%',
      height:'50%',
      alignItems:'center',
      justifyContent:'center'
    }
});

export default ServiceCard;