import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default class App extends React.Component {
	
constructor(props) {
  super(props);
 this.state = {text: '', data: []}
}
	
 add = () => {
  this.setState({data: [...this.state.data,
   {key: this.state.text}], text: ''});
}
 
 clear = () => {
	 this.setState({data: ''});
 }
	
  render() {
    return (
      <View style={styles.container}>
		
  <TextInput style={styles.input}
  onChangeText={(text) => this.setState({text})}
  value={this.state.text}
/>

<Button onPress={this.add} title="Add" />
<Button onPress={this.clear} title="Clear" />
	
	<Text>Shopping list</Text>
	
<FlatList style={styles.list} data={this.state.data}
       renderItem={({item}) =>
       <Text>{item.key}</Text>
}
	   />

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
	
	input: {
		margin: 20,
		width: 200,
		borderColor: 'gray',
		borderWidth: 1,
	},
	

	list: {
	},
	
	
});
