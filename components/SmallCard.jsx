import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Button } from 'react-native-paper';
import Colors from "../constants/Colors";
import { TouchableOpacity } from 'react-native-gesture-handler';

const screen = Dimensions.get("window");


const SmallCard = props =>{

let textStyle = styles.text;

if(screen.height > 800 || screen.width >500) {
        textStyle = styles.textBig;
}
    return(
      <View style = {styles.container}>  
            <TouchableOpacity onPress = {props.onPress} style = {styles.card}>

                <View style= {styles.imageContainer}>
                        <Image style={styles.image} source ={props.image}/>

                </View>
                
                <View style = {styles.textContainer}>
                        <Text style = {textStyle}>
                        
                        {props.screen}
                        
                        </Text>
                        

                </View>

            </TouchableOpacity>


      </View>

     );    
};


const styles= StyleSheet.create({
        container : {
                flex : 1 ,
                
        },
        card : {
            width : "80%",
            height : "100%",
           
            borderWidth : 2 ,
            borderColor : "black",
            backgroundColor :  "white",
            justifyContent : "space-around",
            alignItems : "center",
            alignSelf : "center"
        },
        imageContainer : {
            width : "45%",
            height : "45%" ,
            
        },

        image: {
                width : "100%",
                height : "100%",
                flexShrink : 1 ,
                resizeMode : "contain"
                
        },
 /////////////////////////////////////////////////////
        text : {
                fontFamily : "poppins",
                color : "black"
        },
        textBig : {
                fontFamily : "poppins",
                color : "black",
                fontSize : 26

        }
   

});

export default SmallCard;