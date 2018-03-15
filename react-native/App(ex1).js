import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {num1:'', num2:'', result:''}
    }
    
    plus = () => {
        let num1=Number(this.state.num1);
        let num2=Number(this.state.num2);
        
        this.setState(
        {result: num1+num2}
        )
    }
    
    minus = ()=> {
        let num1=Number(this.state.num1);
        let num2=Number(this.state.num2);
        
        this.setState(
        {result: (num1-num2)}
        )
    }
    

    
    
  render() {
    return (
      <View style={styles.container}>
        <Text>Result: {this.state.result}</Text>
        <TextInput style={{width:200, borderColor: "gray", borderWidth:1
            }} onChangeText={(num1) => this.setState({num1})}
            value={this.state.num1}  keyboardType='numeric'
        />
        <TextInput style={{width:200, borderColor: "gray", borderWidth:1
            }} onChangeText={(num2) => this.setState({num2})}
            value={this.state.num2} keyboardType='numeric'
        />
                
        <Button onPress={this.plus} title="+"/>
        <Button onPress={this.minus} title="-"/>
        
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

