import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
	
	
	constructor(props) {
  		super(props);
 		this.state = {field1: '', output: '', random:Math.floor(Math.random()*100)+1,
		counter:1}
	} 
	
	guessPressed = () => { 
		
		let guess = parseInt(this.state.field1);

			if (guess < this.state.random) {
				this.setState({
					output:"Your number is too low",
					counter: this.state.counter+1
				})
			} else if (guess > this.state.random) {
				this.setState({
					output:"Your number is too high",
					counter: this.state.counter+1
				})
			} else {
				alert("You have guessed in "+this.state.counter+" guesses");
			}
	} 
	
	
  render() {
    return (
      <View style={styles.container}>
        <Text>Guess a number between 1-100</Text>
		
		<TextInput style={{width: 200, borderColor: 'gray',
			borderWidth: 1}}
	  		onChangeText={(field1) => this.setState({field1})}
	  		value={this.state.field1} keyboardType="numeric"
		/>
		<Button onPress={this.guessPressed} title="Make guess" />
		<Text>{this.state.output}</Text>
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
