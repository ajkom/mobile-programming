import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, StatusBar, Image } from 'react-native';

//
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {recipies: [], food: ''};
  }

  getRecipies = () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + this.state.food;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({recipies: responseJson});
      })
      .catch((error) => {
        Alert.alert(error);
      });
  }

  listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <FlatList
          style={{marginLeft : "5%"}}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Text style={{fontSize: 18}}>{item.title}{"\n"}<Image source={{uri:item.thumbnail}} style = {{width:100, height:100}}/></Text>} data={this.state.recipies.results}
          ItemSeparatorComponent={this.listSeparator} />
        <TextInput style={{fontSize: 18, width: 200}} placeholder='food' onChangeText={(food) => this.setState({food})} />
        <Button title="Find" onPress={this.getRecipies} />
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
