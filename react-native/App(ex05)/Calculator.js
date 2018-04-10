import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';
import {StackNavigator} from 'react-navigation';



export default class App extends React.Component {

constructor(props) {
  super(props);
 	this.state = {field1: '', field2: '', final: '', data:[]}
}
	minusPressed = () => {
	let final = parseInt(this.state.field1) - parseInt(this.state.field2)


	let text=this.state.field1+"-"+this.state.field2+"="+final

	this.setState(
		{final: final,
		 data: [...this.state.data,
   {key: text}]
		})

	}

	plusPressed = () => {
	let final = parseInt(this.state.field1) + parseInt(this.state.field2)

	let text=this.state.field1+"+"+this.state.field2+"="+final
	this.setState(
		{final: final,
		 data: [...this.state.data, {key: text}]
		})
		}

  render() {
const { navigate } = this.props.navigation;
    return (

 <View style={styles.container}>

	<TextInput style={{width: 200, borderColor: 'gray',
	borderWidth: 1}}
	  onChangeText={(field1) => this.setState({field1})}
	  value={this.state.field1} keyboardType="numeric"
	/>
		  <Text>Result: {this.state.final}</Text>

	<TextInput style={{width: 200, borderColor: 'gray',
	borderWidth: 1}}
	  onChangeText={(field2) => this.setState({field2})}
	  value={this.state.field2} keyboardType="numeric"
	/>

<Button onPress={this.minusPressed} title="-" />
<Button onPress={this.plusPressed} title="+" />

<Button onPress={() => navigate('History', {data:this.state.data})}
        title="History"/>



</View>

)}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
