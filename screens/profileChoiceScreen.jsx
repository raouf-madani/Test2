import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Image, Dimensions} from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/Colors";

const screen = Dimensions.get('window');

const ProfileChoiceScreen = props =>
{
  let titleStyle = styles.title;
  if (screen.width <= 360) {
    titleStyle = styles.titleSmall ;
    }

  if (screen.height > 800) {
      titleStyle = styles.titleBig;
    }

    return(
      <View style = {styles.container}>
        <View
        style={styles.bigBackgroundImage} 
        >

          <View style = {styles.generalContainer}>
        <View style = {styles.image} >  
            <Image
            style = {{width : "100%" , height : "100%"}} 
            source ={require("../assets/logo/icon2.png")} 
            resizeMode = "contain"

            />


          </View>
  
                <View style = {styles.cardsContainer}>
                <Card 
                url = {require("../assets/logo/barber-shop.png")}
                role = "Coiffeur"
                fonctionA = "Proposez vos services"
                fonctionB = "Louez votre Stade"
                onPress={() =>props.navigation.navigate('Owner')}
                    />

                <Card 
                url = {require("../assets/logo/hairstyle.png")}
                role = "Client"
                fonctionA = "Coiffez vous"
                fonctionB = "Trouvez un adversaire"
                onPress={() =>props.navigation.navigate('Player')}
                 />


            </View>
</View>
         </View>

      </View>

     );    
};

ProfileChoiceScreen.navigationOptions= ()=>{
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
    )};
}


const styles= StyleSheet.create({
        container : {
            flex : 1 ,
        },
        textContainer : {
          justifyContent : "center",
          alignItems :"center",
          marginBottom : 20
    },
  /////////////////////////////////////////////////////////
        title : {
          fontSize : 22 , 
          fontFamily : "poppins-bold" , 
          letterSpacing : 2 , 
          color :"black"
        },
        titleSmall : {
          fontSize : 18 , 
          fontFamily : "poppins-bold" , 
          letterSpacing : 1 , 
          color :"black"
        },
        titleBig : {
          fontSize : 38, 
          fontFamily : "poppins-bold" , 
          letterSpacing : 2 , 
          color :"black",
          marginBottom : 15
        },

/////////////////////////////////////////////////////////////////
        bigBackgroundImage:{
            flex:1,
            justifyContent : "center"
          },
          generalContainer : {
                justifyContent : "flex-start",
                alignItems : "center",
                 width : "100%",
                 height : "100%",
                 backgroundColor : Colors.grey
              
          },
          cardsContainer : {
            flexDirection : "row",
            justifyContent : "space-around",
            alignItems : "center",
            width : "100%",
            overflow : "hidden",
          
          },
          image : {
        height : 150 ,
        width : "100%",
        
        marginVertical : 50

          }
          
          


});

export default ProfileChoiceScreen;