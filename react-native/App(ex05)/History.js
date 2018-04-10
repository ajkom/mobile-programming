import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';

export default class History extends React.Component {
  static navigationOptions = {title: 'History'};

constructor(props) {
  super(props);
  

}

  render() {
    const {params} = this.props.navigation.state;

    return (
        <View style={styles.container}>
          <Text>History</Text>
          <FlatList data={params.data} renderItem={({item}) =>
          <Text>{item.key}</Text>} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
