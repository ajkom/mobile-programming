import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MyPlaces from './MyPlaces.js';
import Map from './Map.js';


const MyApp = StackNavigator({
      MyPlaces: {screen: MyPlaces},
      Map: {screen: Map}
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
