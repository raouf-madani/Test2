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
        placeholder="Nom du coiffeur"
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
                  name = "Walid Meziani"
                  adress = "Bab essabt      1.2km"
                  onPress = {()=>props.navigation.navigate("StadiumBooking")}
                  infoPress = {overlayHandler}
                  url = {require("../../../assets/images/person1.jpg")}
                 />
                
                <StadiumCard
                 name = "Raouf Madani"
                 adress = "Bab dzayer      2.7km"
                 url = {require("../../../assets/images/person3.jpg")}
                   />

                <StadiumCard 
                  name = "Snoussi Hareth"
                  adress = "Bab Errahba      3.0km"
                  url = {require("../../../assets/images/person2.jpg")}
                />
                <StadiumCard 
                  name = "Lucas Hood"
                  adress = "Banshee      3.7km"
                  url = {require("../../../assets/images/person4.jpg")}
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