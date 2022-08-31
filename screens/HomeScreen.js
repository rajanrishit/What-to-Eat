import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import AppHeading from '../components/AppHeading';
import LoginScreen from './LoginScreen';
import Lunch from './Luncch';

export default class HomeScreen extends Component {

  goToLunch = () => {
    this.props.navigation.navigate('Luncch');
  };

  render() {
    return (
      <View>
        <AppHeading />
        <ScrollView>

           <Text style={styles.moring}>Morning</Text>
           
          <Image
            source={require('../assests/Parantha.jpg')}
            style={styles.parantha}
          />

           <Text style={styles.paranthaText}>Paratha</Text>

          <Image
            source={require('../assests/Cereal.jpg')}
            style={styles.cereal}
          />
          <Text style={styles.cerealText}>Cereal</Text>

          <Image
            source={require('../assests/Omelette.jpg')}
            style={styles.omelette}
          />
          <Text style={styles.omeletteText}>Omelette</Text>

          <Image
            source={require('../assests/Toast.jpg')}
            style={styles.toast}
          />
          <Text style={styles.toastText}>Toast</Text>

          <TouchableOpacity
            onPress={() => {
              this.goToLunch();
            }}>
            <Text style={styles.button}>Lunch Time </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parantha: {
    width: '80%',
    height: 200,
    margin: 20,
    marginLeft: 25,
    borderWidth:3,
   borderRadius: 20,
  },
  paranthaText: {
    justifyContent: 'CENTER',
    marginLeft: 120,
    fontWeight: 'bold',
    color: 'red',
  },
  cereal: {
    width: '80%',
    height: 200,
    margin: 20,
    marginLeft: 25,
     borderWidth:3,
   borderRadius: 20,
  },
  cerealText: {
    justifyContent: 'CENTER',
    marginLeft: 120,
    fontWeight: 'bold',
    color: 'purple',
  },
  omelette: {
    width: '80%',
    height: 200,
    margin: 20,
    marginLeft: 25,
     borderWidth:3,
   borderRadius: 20,
  },
  omeletteText: {
    justifyContent: 'CENTER',
    marginLeft: 120,
    fontWeight: 'bold',
    color: 'green',
  },
  toast: {
    width: '80%',
    height: 200,
    margin: 20,
    marginLeft: 25,
     borderWidth:3,
   borderRadius: 20,
  },
  toastText: {
    justifyContent: 'CENTER',
    marginLeft: 120,
    fontWeight: 'bold',
    color: 'orange',
  },
  button: {
    width: '55%',
    height: 50,
    alignSelf: 'CENTER',
    margin: 20,
    padding: 0,
    backgroundColor: 'red',
    borderWidth: 5,
    borderRadius: 15,
    textAlign: 'CENTER',
    fontWeight: 'BOLD',
    fontSize: 25,
  },
  moring: {
    margin: 20,
   backgroundColor: 'yellow',
    alignSelf: 'CENTER',
    fontWeight: 'BOLD',
    fontSize: 25,
    borderWidth: 5,
    borderRadius: 15,
  },
});
