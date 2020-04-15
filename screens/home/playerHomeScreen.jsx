import React from 'react';
import { StyleSheet, Text, View, ImageBackground , Image ,Dimensions} from 'react-native';
import SmallCard  from '../../components/SmallCard';
import Colors from "../../constants/Colors";

const screen = Dimensions.get("window");
const PlayerHomeScreen = props =>{


let welcomeTextStyle = styles.welcomeText;

  if(screen.width < 350) {
    welcomeTextStyle = styles.welcomeTextSmall;
  }

  if (screen.height > 800) {
    welcomeTextStyle = styles.welcomeTextBig;
  }

    return(
      <View style ={styles.container}>
        <View   style = {styles.backgroudnImage}>
         
         <View style = {styles.textContainer}>
     
           <Image 
           source = {require("../../assets/logo/Bienvenue.png")
           }  
             resizeMode = "contain"
             style = {{height : "100%" , width : "100%"}}
           />
          
         
         </View>

          <View style = {styles.rowsContainer}>
              <View style = {styles.rowOne}>

              
              <SmallCard
                    image ={require("../../assets/logo/user3.png")} 
                    screen = "Profile"
                    onPress = {() =>props.navigation.navigate('PlayerProfileScreen')}
                   />
                  <SmallCard 
                  image ={require("../../assets/logo/home.png")} 
                  screen = "Service à domicile"
                  onPress = {() =>props.navigation.navigate('findBarber')}
                  />
                  
                 

              </View> 

              <View style = {styles.rowTwo}>
                  
                  <SmallCard
                    image ={require("../../assets/logo/calendar2.png")} 
                    screen = "Réservations"
                    onPress = {() =>props.navigation.navigate('PlayerBookings')}
                     />

                     <SmallCard
                  image ={require("../../assets/logo/book.png")} 
                  screen = "Trouver un salon"
                  onPress = {() =>props.navigation.navigate('Stadiums')}
                   />

              </View>
       
       
            </View>

        </View>


      </View>

     );    
};

PlayerHomeScreen.navigationOptions= ()=>{
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
      flex : 1,
  },
  backgroudnImage : {
    flex : 1 ,
    justifyContent : "center",
    backgroundColor : Colors.grey
  },
  image : {
        width : "100%",
        height : "100%"
  },
  imageContainer : {
      width : 100,
      height : 100,
      alignSelf : "center",
      marginVertical : 30
  },
  rowsContainer : {
      alignItems :"center",
      justifyContent : "space-around" 
  },
  rowOne : {
      flexDirection : "row",
      width : "95%",
      height : "32%",

      
  },
  rowTwo : {
    flexDirection : "row",
    width : "95%",
    height : "32%",
    marginBottom : 30
},

    textContainer : {
           width : "80%",
           overflow :"hidden",
           height : 120,
           alignSelf : "center"

    },
/////////////////////////////////////////////////////////////
    welcomeText : {
        fontFamily : "poppins-bold",
        fontSize : 45,
        color : "black",
        letterSpacing : 5,

    },
    welcomeTextSmall : {
      fontFamily : "poppins-bold",
      fontSize : 28,
      color : "black",
      letterSpacing : 4,

    },
    welcomeTextBig : {
      fontFamily : "poppins-bold",
      fontSize : 55,
      color : "black",
      letterSpacing : 5,
    }
/////////////////////////////////////////////////////////////

   

});

export default PlayerHomeScreen;