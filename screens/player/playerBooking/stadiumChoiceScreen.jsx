import React, { useState } from 'react';
import { StyleSheet, Text, View,Image, ImageBackground, Button} from 'react-native';

import StadiumCard from '../../../components/StadiumCard';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import Colors from "../../../constants/Colors";
import InfoOverlay from '../../../components/InfoOverlay';

const StadiumChoiceScreen = props =>{

  const [overlayState , setOverlay] = useState (false);

  const overlayHandler = ()=> {

    setOverlay((previous) => !previous);
  }
  
    return(
     
      <View
      
       style = {styles.container}
     
       >
        <InfoOverlay 
        isVisible = {overlayState}
        infoHandler = {overlayHandler}
     
         />
      
        <View style = {styles.componentsContainer}>
       <View style = {{
         backgroundColor : "#da3a30",
       paddingTop : 55,
       
       }}>
       <SearchBar
        placeholder="Nom du sallon"
        containerStyle = {styles.searchBar}

        inputContainerStyle = {{
                borderRadius : 25,
        }}

        lightTheme = {true}
        searchIcon = {{color : Colors.background, size : 25}}
      />
      
      </View> 
            <ScrollView>
                <StadiumCard
                  name = "Tahfifa Bab Essebt"
                  adress = "Bab essabt      2.7km"
                  onPress = {()=>props.navigation.navigate("StadiumBooking")}
                  infoPress = {overlayHandler}
                  url = {require("../../../assets/images/imagefive.jpg")}
                  mark = "4.5"
                 />
                
                <StadiumCard
                 name = "Tahfifa Bab Essebt"
                 adress = "Bab essabt      2.7km"
                 url = {require("../../../assets/images/barber2.jpg")}
                 mark = "3.2"
                   />

                <StadiumCard 
                  name = "Tahfifa Bab Essebt"
                  adress = "Bab essabt      2.7km"
                  url = {require("../../../assets/images/barber3.png")}
                  mark = "4.9"
                />
                <StadiumCard 
                  name = "Tahfifa Bab Essebt"
                  adress = "Bab essabt      2.7km"
                  url = {require("../../../assets/images/barber4.jpg")}
                  mark = "3.9"
                />
                
                </ScrollView>

        </View>
          
      </View>

     );    
};


StadiumChoiceScreen.navigationOptions = (navData) => {
return {
  headerTransparent : true,
  headerTintColor:'white',
  headerBackTitle : " ",
  title : ""
}

};

const styles= StyleSheet.create({
    container : {
            flex: 1 ,
            justifyContent : "flex-end",
            backgroundColor : Colors.grey,

    },

    componentsContainer : {
        width : "100%",
        height : "100%",
        alignSelf : "center"
    },
    searchBar :{
      width : "80%" , 
      alignSelf : "center",
      borderRadius : 20 , 
      backgroundColor : "rgba(52, 52, 52, 0)" ,
      marginBottom : 15 ,
      borderTopWidth : 0 , 
      borderBottomWidth : 0 
      }
    
   

});

export default StadiumChoiceScreen;