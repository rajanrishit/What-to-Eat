import React,{Component} from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

export default class App extends Component {
  render(){
     return (
       <View style={styles.container}>
        <Text style={styles.tittle}>
          What To Eat?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 9,
  },
  tittle :{
    textAlign: 'CENTER',
    fontSize: 30,
    fontWeight:'bold',
    justifyContent:"centre",
  },
});