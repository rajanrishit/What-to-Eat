import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView
} from 'react-native';
import AppHeading from '../components/AppHeading';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Luncch from './Luncch';

export default class Afternoon extends Component {
  goToLoginScreen=()=>{
    this.props.navigation.navigate('LoginScreen');
  }
  render() {
    return (
      <View>
        <AppHeading />
        <ScrollView>
              <Text style={styles.dinner}>Dinner</Text>

          <Image source={require('../assests/dalia.jpg')} 
            style={styles.dalia}
            />  <Text style={styles.daliaText}>Dalia</Text>

             <Image source={require('../assests/khicdhi.jpg')} 
            style={styles.khichdi}
            />  <Text style={styles.khicdhiText}>khicdhi</Text>

              <Image source={require('../assests/oats.jpg')} 
            style={styles.oats}
            />  <Text style={styles.oatsText}>Oats</Text>

              <TouchableOpacity
                onPress={() =>{
                    this.goToLoginScreen();
                }}>
            <Text style={styles.thanksText}>Thanks To Visit Our App</Text>
              </TouchableOpacity>

        </ScrollView>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  dalia : {
    width:'80%',
    height:200,
    margin:20,
    marginLeft:25,
     borderWidth:3,
   borderRadius: 20,
  },
   daliaText : {
    justifyContent:"CENTER",
     marginLeft:120,
     fontWeight:"bold",
     color:"red"
  },
  khichdi : {
    width:'80%',
     height:200,
     margin:20,
     marginLeft:25,
      borderWidth:3,
   borderRadius: 20,
  },
   khicdhiText : {
     justifyContent:"CENTER",
     marginLeft:120,
     fontWeight:"bold",
     color:"purple"
   },
  oats : {
    width:'80%',
     height:200,
      margin:20,
     marginLeft:25,
      borderWidth:3,
   borderRadius: 20,
  },
   oatsText : {
     justifyContent:"CENTER",
     marginLeft:120,
     fontWeight:"bold",
     color:"green"
   },
    thanksText : {
     width: '55%',
    height: 100,
    alignSelf: 'CENTER',
    margin: 20,
    padding: 0,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderRadius: 15,
    textAlign: 'CENTER',
    fontWeight: 'BOLD',
    fontSize: 25,
   },
   dinner: {
    margin: 20,
   backgroundColor: 'yellow',
    alignSelf: 'CENTER',
    fontWeight: 'BOLD',
    fontSize: 25,
    borderWidth: 5,
    borderRadius: 15,
  },
})  

