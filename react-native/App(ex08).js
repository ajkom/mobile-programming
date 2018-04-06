import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, StatusBar } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount:0,
      currencylist: [],
      currency: '',
      result:''
    };
  }

componentDidMount = () => {
    const url = 'https://api.fixer.io/latest';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({currencylist: responseJson.rates});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  convert = () => {
    let amount=this.state.amount;
    let currency=this.state.currency;
    let curlist=this.state.currencylist;
    let rate=curlist[currency];
    let result=(amount/rate).toFixed(2);

    this.setState({result: result+"€"})
  }


  showPickerItems = () => {
    let storeData = [];
    for (var currencyType in this.state.currencylist) {
      var pickerItem = (
        <Picker.Item
          label={currencyType}
          value={currencyType}
          key={currencyType}
        />
      );
      storeData.push(pickerItem);
    }
    return storeData;
};

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden={true} />

        <Text style={styles.text}>Result: {this.state.result}</Text>
        <TextInput style={styles.text}
            onChangeText={amount => {
              this.setState({amount: parseInt(amount)});
            }}
          placeholder="Amount"
          />
           <Button title="Convert" onPress={this.convert} />

        <Picker
        style={{width:100}}
          selectedValue={this.state.currency}
          mode="dropdown"
          onValueChange={currency => {
            this.setState({ currency});
          }}
          >
            {this.showPickerItems()}
        </Picker>

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
  text:{
    fontSize: 18,
    width: 200
  }
});
