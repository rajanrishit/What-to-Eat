import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Luncch from './screens/Luncch';
import Dinner from './screens/Dinner';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import firebase from 'firebase';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  HomeScreen: HomeScreen,
  Luncch: Luncch,
  Dinner: Dinner,
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  background: {
    justifyContent: 'center',
  },
});
