import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,Button, ImageBackground,Dimensions} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import Colors from "../constants/Colors";


const screen = Dimensions.get("window");
const StadiumCard = props =>{
  let cardContainerStyle = styles.cardContainer;
  let titleStyle = styles.title;
  let adressStyle = styles.adress;

  if(screen.width > 500 ) {
    cardContainerStyle = styles.cardContainerBig;
    titleStyle = styles.titleBig;
    adressStyle = styles.adressBig;
  }

  const [favState , setFav] = useState(false);
  const [iconState ,setIcon] =useState("md-heart-empty");

  const favHandler = ()=> {
    setFav(old =>!old);
    favState ? setIcon("md-heart") : setIcon("md-heart-empty");

  };
  

    return(
       
        <ImageBackground
        source = {require("../assets/images/cardback1.jpg")} 
        style = {cardContainerStyle}
        >

        <View style = {styles.imageContainer}>
            <Image source = {props.url} style = {styles.image}  />

        </View>
         
            <View style={styles.textContainer}>
            
            <View>
                <Text style = {titleStyle}>
                {props.name}
                </Text>

                <Text style = {adressStyle}>
                {props.adress}
                </Text>
             </View>
      
            <View style = {styles.buttonContainer}>
            <View style = {{flexDirection : "row" , alignItems : "center" , width : "33%"}}>
            <Ionicons 
                name = "md-star" 
                size = {22}
                color ="#da3a30"
                
                

         />
         <Text style = {{fontSize : 16,marginLeft : 5}}>
         {props.mark}
         </Text>
         </View>


         <View style = {{width : "33%",alignItems : "center"}}>
          <Ionicons 
                name = {iconState}
                size = {22}
                color ="#da3a30"
                onPress = {()=>favHandler()}

         />
         </View>
         <View style = {{width : "33%",alignItems : "center"}}>
          <Ionicons 
                name = "md-information-circle" 
                size = {22}
                color ="#da3a30"
                onPress = {props.infoPress}

         /></View>

            </View>

          

        </View>

        <View style = {styles.info}>

        <Ionicons 
        name = "ios-arrow-forward" 
        size = {25}
        color ="#da3a30"
        onPress = {props.onPress}

         />
        </View>
      
    </ImageBackground>



     );    
};


const styles= StyleSheet.create({
 ///////////////////////////////////////////////////////////   
    cardContainer : {
        width : "100%" ,
        height : 140,
        flexDirection : "row",
        justifyContent : "space-around",
        overflow : "hidden",
        alignSelf : "center",
        marginBottom : 1,
        borderBottomWidth : 2,
    },
    cardContainerBig : {
        width : "100%" ,
        height : 180,
        flexDirection : "row",
        justifyContent : "space-around",
        overflow : "hidden",
        alignSelf : "center",
        marginBottom : 12,
        borderRadius : 10,
        borderWidth : 2,

    },
 ///////////////////////////////////////////////////////////
    imageContainer : {
            width : "25%",
            height : "85%",      
            alignSelf : "center",
            borderRadius :22,
            overflow : "hidden",
            
    },

    image : {
            height : "100%",
            width : "100%",
           

    },
    textContainer : {
            width : "55%",
            overflow : "hidden",
            justifyContent : "space-around",
            alignItems : "center",
            
    },
   /////////////////////////////////////////////////////////
    title : {
        alignSelf : "center",
        fontFamily : "poppins-bold",
        letterSpacing : 1,
        color : "black",
        
        
    },

    titleBig : {
        alignSelf : "center",
        fontFamily : "poppins-bold",
        letterSpacing : 1,
        color : "black",
        fontSize : 22
    },

/////////////////////////////////////////////////////////
    adress : {
           alignSelf : "center",
           fontSize : 15,
           color : "black"
    },
    adressBig : {
        alignSelf : "center",
        fontSize : 12,
        color : "black",
        fontSize : 20

    },
/////////////////////////////////////////////////////////
    info : {
       
        height : "100%",
        width : "10%",
        alignItems : "center",
        justifyContent : "center",
        borderLeftWidth : 0.2,
        
    },
    buttonContainer : {
            width : "90%",
            flexDirection : "row",
            justifyContent : "space-between",
            
            
    }
   

});

export default StadiumCard;