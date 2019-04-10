import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { AppRegistry, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.state2 = { text: ''}
    this.state3 = { text: ''}
  }

  render() {
    return (<View>
      <View style = {styles.container}>
      <Text> Description of item </Text>
      <TextInput
        style={{height: 100, borderColor: '#F59A81', borderWidth: 1, marginBottom: 10}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <Text> When did you find it? </Text>
      <TextInput
        style={{height: 40, borderColor: '#F59A81', borderWidth: 1, marginBottom: 10}}
        onChangeText={(text) => this.setState({text})}
        value={this.state2.text}
      />
      <Text> Where did you find it? </Text>
      <TextInput
        style={{height: 40, borderColor: '#F59A81', borderWidth: 1, marginBottom: 10}}
        onChangeText={(text) => this.setState({text})}
        value={this.state2.text}
      />
      </View>
    <View style={styles.ButtonWrapper}>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('foundResult')
              }}>
              <Text style = {styles.buttonText}> OK </Text>
              </TouchableOpacity>
            </View>
            </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20
  },
  ButtonWrapper: {
    backgroundColor: '#95AA7F',
    height: 90,
    width: 150,  
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 110,
    marginTop: 30
 },
     buttonText: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: '600',
    margin: 'auto'
  }
});