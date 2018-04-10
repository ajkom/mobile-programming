import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import History from './History.js';
import Calculator from './Calculator.js';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';

const MyApp = StackNavigator({
      Calculator: {screen: Calculator},
      History: {screen: History}
});

export default class App extends React.Component {

  render() {

    return <MyApp />;
}
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
