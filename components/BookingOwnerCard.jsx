import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity} from 'react-native';

const screen = Dimensions.get("window");


const BookingOwnerCard = props =>{


    return(
    <TouchableOpacity onPress={props.onPress} style={{marginVertical:10,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>{props.fullname}</Text>
            <Text style={{fontFamily:'poppins',color:'grey',fontSize:13}}>{props.phone}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <View style={{marginHorizontal:10,backgroundColor:props.color,width:80,height:30,borderRadius:20,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'poppins',color:'white'}}>{props.place}</Text>
            </View>
            <View style={{width:60,height:60}}>
                <Image source={props.imagePath} style={{width:'100%',height:'100%',borderRadius:30}} />
            </View>
        </View>
    </TouchableOpacity>
     );    
};


const styles= StyleSheet.create({
       

});

export default BookingOwnerCard;