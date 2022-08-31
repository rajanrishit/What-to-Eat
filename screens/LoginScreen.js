import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import AppHeading from '../components/AppHeading';
import HomeScreen from './HomeScreen';
import Luncch from './Luncch';
import db from '../config';

export default class App extends Component {
  goToHomeScreen = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.incrementcounter + 1 });
  };

  render() {
    return (
      <View style={styles.backgroundColor}>
        <AppHeading />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          placeholder="Please enter your Name"
        />
        <TouchableOpacity
          onPress={() => {
            this.goToHomeScreen();
          }}>
          <Text style={styles.goButton}>Let's go </Text>
        </TouchableOpacity>
        
        <Image
          source={require('../assests/picture.jpg')}
          style={styles.picture}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: '#ecf0f1',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'CENTER',
    margin: 90,
    padding: 10,
    backgroundColor: 'yellow',
    borderWidth: 5,
    borderRadius: 15,
    textAlign: 'CENTER',
    fontWeight: 'BOLD',
    fontSize: 25,
  },
  inputBox: {
    marginTop: 80,
    width: '80%',
    alignSelf: 'CENTER',
    textAlign: 'CENTER',
    borderWidth: 4,
    height: 40,
    outline: 'none',
  },
  picture: {
    width: '90%',
    height: 160,
    backgroundColor: 'yellow',
    borderWidth: 5,
    borderRadius: 15,
    alignSelf: 'CENTER',
    fontWeight: 'BOLD',
    fontSize: 25,
  },
});
