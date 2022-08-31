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
import HomeScreen from './HomeScreen';

export default class Afternoon extends Component {
  goToDinner = () => {
    this.props.navigation.navigate('Dinner');
  };
  render() {
    return (
      <View>
        <AppHeading />
        <ScrollView>
          <Text style={styles.lunch}>Lunch</Text>
          <Image
            source={require('../assests/chapati.jpg')}
            style={styles.chapati}
          />{' '}
          <Text style={styles.chapatiText}>Chapati</Text>
          <Image
            source={require('../assests/rice.jpg')}
            style={styles.rice}
          />{' '}
          <Text style={styles.riceText}>Rice</Text>
          <TouchableOpacity
            onPress={() => {
              this.goToDinner();
            }}>
            <Text style={styles.dinner}>Dinner Time </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chapati: {
    width: '80%',
    height: 200,
    margin: 20,
    marginLeft: 25,
     borderWidth:3,
   borderRadius: 20,
  },
  chapatiText: {
    justifyContent: 'CENTER',
    marginLeft: 120,
    fontWeight: 'bold',
    color: 'red',
  },
  rice: {
    width: '80%',
    height: 200,
    margin: 20,
    marginLeft: 25,
     borderWidth:3,
   borderRadius: 20,
  },
  riceText: {
    justifyContent: 'CENTER',
    marginLeft: 120,
    fontWeight: 'bold',
    color: 'purple',
  },
  dinner: {
    width: '55%',
    height: 50,
    alignSelf: 'CENTER',
    margin: 20,
    padding: 0,
    backgroundColor: 'yellow',
    borderWidth: 5,
    borderRadius: 15,
    textAlign: 'CENTER',
    fontWeight: 'BOLD',
    fontSize: 25,
  },
  lunch: {
    margin: 20,
    backgroundColor: 'pink',
    alignSelf: 'CENTER',
    fontWeight: 'BOLD',
    fontSize: 25,
    borderWidth: 5,
    borderRadius: 15,
  },
});
