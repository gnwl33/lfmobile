import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert } from 'react-native';

export default class message extends React.Component {
  render() {
    return (
      <ScrollView> 

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#ddd',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainerText: {
    fontSize: 16, 
    marginTop: 20,
  },
  secondContainerHeadline: {
    fontSize: 24, 
    marginTop: 25,
    fontWeight: 'bold'
  },
  textContainer: {
    marginLeft: 30,
    marginRight: 30, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    marginTop: 40, 
    fontSize: 20, 
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    height: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: 300
  },
  secondContainer: {
    backgroundColor: '#87D8ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#ff6b6b',
    height: 80, 
    width: 180, 
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,

  }
});

// backgroundColor: '#87D8ED',
