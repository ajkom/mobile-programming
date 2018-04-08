import React from 'react';
import {StatusBar, StyleSheet, View, FlatList,  Dimensions} from 'react-native';
import Expo, { SQLite } from 'expo';

import { FormInput, Header, FormLabel, Button, List, ListItem } from 'react-native-elements';

const db = SQLite.openDatabase('shoppingdb.db');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {amount: '', product: '', shopping: []};
  }

  componentDidMount() {
    db.transaction(tx => {
      tx.executeSql('create table if not exists shopping (id integer primary key not null, amount text, product text);');
    });
    this.updateList();
  }

  saveItem = () => {
    db.transaction(tx => {
        tx.executeSql('insert into shopping (amount, product) values (?, ?)', [this.state.amount, this.state.product]);
      }, null, this.updateList)
  }

  updateList = () => {
    db.transaction(tx => {
      tx.executeSql('select * from shopping', [], (_, { rows }) =>
        this.setState({shopping: rows._array, product:'', amount:''})
      );
    });
  }

  deleteItem = (id) => {
    db.transaction(
      tx => {
        tx.executeSql(`delete from shopping where id = ?;`, [id]);
      }, null, this.updateList
    )
  }

  listSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: "80%",
          backgroundColor: "#fff",
          marginLeft: "10%"
        }}
      />
    );
  };

  render() {
    let width =Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        <View style={styles.container}>
            <Header
              width={width}
              centerComponent={{ text:'SHOPPING LIST', style: { color: '#fff' } }}
            />

          <FormLabel>PRODUCT</FormLabel>
          <FormInput placeholder='Product'
            onChangeText={(product) => this.setState({product})}
            value={this.state.product}/>

          <FormLabel>AMOUNT</FormLabel>
          <FormInput placeholder='Amount'
          onChangeText={(amount) => this.setState({amount})}
            value={this.state.amount}/>

          <Button onPress={this.saveItem} title="SAVE" buttonStyle={{width: width}}/>


          <FlatList
            data={this.state.shopping}
            style={{width: width}}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
           ItemSeparatorComponent={this.listSeparator}
          />

          </View>

      </View>
    );
  }

renderItem =  ({item}) => (
  <ListItem
    title={item.product}
    subtitle={item.amount}
    rightTitle={"bought"}
    onPress={() => this.deleteItem(item.id)}
  />

)

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs: {
      backgroundColor:'red',
      position:"absolute",

    }
});
