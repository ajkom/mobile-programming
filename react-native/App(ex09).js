import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, KeyboardAvoidingView} from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        location: '',
        latitude: 60.200692,
        longitude: 24.934392,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
        title: 'Haaga-Helia'
      }
  }

  search = () => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' +
    this.state.location + '?&key=AIzaSyClulqjPepQjs9IWY8qfUlcUIHeFyr_2Ys';
    fetch(url)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                location: responseData.results[0].formatted_address,
                title: responseData.results[0].formatted_address,
                latitude: responseData.results[0].geometry.location.lat,
                longitude: responseData.results[0].geometry.location.lng,
                latitudeDelta: responseData.results[0].geometry.viewport.northeast.lat - responseData.results[0].geometry.viewport.southwest.lat,
                longitudeDelta: responseData.results[0].geometry.viewport.northeast.lng - responseData.results[0].geometry.viewport.southwest.lng,
            })
        })
    .catch((error) => {
        Alert.alert(error);
    })
  }


  render() {
    return (
      <View style={styles.container}>
      <MapView
          style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
          region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: this.state.latitudeDelta,
              longitudeDelta: this.state.longitudeDelta,
          }}>

          <MapView.Marker coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
          }}
            title={this.state.title}/>
            </MapView>
        <KeyboardAvoidingView behavior="padding" style={styles.search}>
            <TextInput
            onChangeText={(location) => this.setState({location})}
            placeholder= 'Where to?'
            style={{
              height:40,
              backgroundColor:'white',
            }} />

            <Button onPress={this.search} title="SHOW" />
            </KeyboardAvoidingView>
        </View>

    );
  }

/*  componentDidMount() {
	  this.getLocation();
    Alert.alert("getting location");
  }

getLocation = async () => {
//Check permission
let { status } = await Permissions.askAsync(Permissions.LOCATION);
	if (status !== 'granted') {
		Alert.alert('No permission to access location');
	}
	else {
		let location = await Location.getCurrentPositionAsync({enableHighAccuracy:false});
		this.setState({ location });
}
};*/


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'absolute',
    bottom:5,
    width: 300,
  },
});
