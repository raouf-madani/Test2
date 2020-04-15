import React, { useState } from 'react';
import { StyleSheet,View,Text,TouchableHighlight,Image,Alert,ScrollView,Dimensions} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import {Calendar,LocaleConfig} from 'react-native-calendars';
import HeaderButton from "../../../components/HeaderButton";
import BookingOwnerCard from '../../../components/BookingOwnerCard';

LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
    dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
    today: 'Aujourd\'hui'
  };
LocaleConfig.defaultLocale = 'fr';

//responsivity (Dimensions get method)
const screen = Dimensions.get('window');

const OwnerBookingsScreen = props =>{


 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /*Responsivity */
  let calendarStyle = styles.calendar;
  let sizeDay = 14;
  let sizeMonth = 14;

  if(screen.width < 350){
    calendarStyle = styles.calendarSmall;
    sizeDay = 13;
    sizeMonth = 13;
  }

  if(screen.height <= 800 && screen.height >=700){
    calendarStyle = styles.calendarTall;
    sizeDay = 16;
    sizeMonth = 17;
  }

  if(screen.height > 800){
    calendarStyle = styles.calendarBig;
    sizeDay = 18;
    sizeMonth = 20;
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  // Calendar Configuration
   const [theDay, setTheDay]= useState();
   const data=[{id:'1',fullname:'FATIMA .Z',imagePth:require('../../../assets/images/fatima.jpg'),place:'DM',creneauD:'13h',creneauF:'14h',statut:'Confirmée',date:'2020-03-16',phone:'06598532145',sexe:'Femme'},
               {id:'2',fullname:'HARETH .S',imagePth:require('../../../assets/images/hareth.jpg'),place:'CO',creneauD:'14h',creneauF:'15h',statut:'Confirmée',date:'2020-03-16',phone:'07597532145',sexe:'Homme'},
               {id:'3',fullname:'CHRIS .K',imagePth:require('../../../assets/images/chris.jpg'),place:'CO',creneauD:'15h',creneauF:'16h',statut:'Confirmée',date:'2020-03-17',phone:'06338532145',sexe:'Femme'},
               {id:'4',fullname:'RAOUF .M',imagePth:require('../../../assets/images/walid.jpg'),place:'DM',creneauD:'16h',creneauF:'17h',statut:'Confirmée',date:'2020-03-18',phone:'06408532145',sexe:'Homme'}
               ];

      
    return(
      <ScrollView style={{backgroundColor:'white'}}>
    <View style={styles.container}>
      
          <Calendar
          style={calendarStyle}
          theme={{calendarBackground:'transparent',
                  todayTextColor: 'rgb(254,178,199)',
                  selectedDayTextColor: 'white',
                  selectedDayBackgroundColor: 'rgb(254,178,199)',
                  textDayFontFamily: 'poppins-bold',
                  textMonthFontFamily: 'poppins',
                  textDayHeaderFontFamily: 'poppins',
                  monthTextColor: '#87d4f2',
                  indicatorColor: 'rgb(254,178,199)',
                  arrowColor:  'rgb(254,178,199)',
                  dayTextColor: '#87d4f2',
                  textDisabledColor: 'grey',
                  textDayFontSize: sizeDay,
                  textMonthFontSize: sizeMonth,
                  textDayHeaderFontSize: 14}}
              
          onDayPress={day => {
            setTheDay(day.dateString);
          }}
          markedDates={{
          [theDay]: {selected: true},
          }}       
          firstDay={7}
          />
          <View style={{marginVertical:15,backgroundColor:'white',width:'92%',borderRadius:10,shadowColor: 'black',shadowOpacity: 0.96,shadowOffset: {width: 0, height:2},shadowRadius: 10, elevation: 5}}>
            {data.map(el=> <BookingOwnerCard
              key={el.id}
              fullname={el.fullname}
              phone={el.phone}
              place={el.place}
              imagePath={el.imagePth}
              color={el.sexe === 'Femme'?'rgb(254,178,199)' : '#87d4f2'}
              onPress={()=>props.navigation.navigate('OwnerBookingsDetail',{bookingID:el.id})}
            />)}
            
            <View style={{backgroundColor:'#E8E8E8',flexDirection:'row',justifyContent:'space-between',padding:10,borderRadius:10}}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontFamily:'poppins',color:'grey',fontSize:13,marginBottom:-5}}>J'ai reçu</Text>
                    <Text style={{fontFamily:'poppins-bold',color:'black',fontSize:20}}>5000 DA</Text>
                </View>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                  <Text style={{fontFamily:'poppins',color:'black'}}>11/04/2020</Text>
                </View>
            </View> 
          </View>
    </View>
    </ScrollView>  
     );    
};


OwnerBookingsScreen.navigationOptions= navData => {
   
    return {
        headerRight : ()=>  (
            <View style={styles.iconContainer}>
              <TouchableHighlight
                style = {styles.bookingsNotifications}
                underlayColor = 'red'
              >
                 <Text style={{color:'rgb(254,178,199)'}}>1</Text>
              </TouchableHighlight>
              <HeaderButtons HeaderButtonComponent = {HeaderButton}> 
                <Item title = "calendar" 
                  iconName = {Platform.OS === 'android' ? 'md-calendar' : 'ios-calendar'}  
                  style={{marginHorizontal:-10}}
                  color= {Platform.OS === 'android' ? 'white' : '#87d4f2'}
                  onPress = { () => Alert.alert('Important','Vous avez 1 réservation(s). Cliquez sur chaque ligne dans le tableau pour voir les détails de chaque réservation.',[{text:"D'accord"}]) }
                />
              </HeaderButtons>  
            </View>
            ),
            headerTitle:'Mes Réservations',
            headerTitleStyle:{
              fontFamily:'poppins',
              color:Platform.OS === 'android' ? 'white' : '#87d4f2'
            },
            headerStyle:{
                backgroundColor:Platform.OS === 'android' ? '#87d4f2' : 'white'
            },
            headerBackTitle:" ",
            headerTintColor:Platform.OS === 'android' ? 'white' : '#87d4f2'
    
    };

 };

const styles= StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    width:'100%',
    alignItems:'center'
},
iconContainer:{
  flexDirection:'row',
  paddingRight:10
},

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
calendar:{
  marginTop:30,
  width:'100%'
},
calendarSmall:{
  marginTop:40,
  width:'100%'
},
calendarTall:{
  marginTop:60,
  width:'100%'
},
calendarBig:{
  marginTop:70
},
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
bookingsNotifications:{
  height:20,
  width:20,
  borderRadius:20/2,
  backgroundColor: Platform.OS === 'android' ? 'white' : '#87d4f2',
  justifyContent:'center',
  alignItems:'center',
  marginHorizontal:-10
},

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
textContainer:{
 padding:15
}
});

export default OwnerBookingsScreen;