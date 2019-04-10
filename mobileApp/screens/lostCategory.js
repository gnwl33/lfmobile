import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    return(
      <ScrollView>
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
          <View style={styles.leftButtonWrapper}>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('lostForm')
              }}>
              <Text style = {styles.buttonText}> ID </Text>
              </TouchableOpacity>
            </View> 

           <View style={styles.rightButtonWrapper}>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('lostForm')
              }}>
              <Text style = {styles.buttonText}> keys </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rightButtonWrapper}>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('lostForm')
              }}>
              <Text style = {styles.buttonText}> wallet </Text>
              </TouchableOpacity>
            </View> 

            <View style={styles.leftButtonWrapper}>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('lostForm')
              }}>
              <Text style = {styles.buttonText}> water bottle </Text>
              </TouchableOpacity>
            </View> 

            <View style={styles.leftButtonWrapper}>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('lostForm')
              }}>
              <Text style = {styles.buttonText}> electronics </Text>
              </TouchableOpacity>
            </View> 

             <View style={styles.rightButtonWrapper}>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('lostForm')
              }}>
              <Text style = {styles.buttonText}> jewelry </Text>
              </TouchableOpacity>
            </View> 

            <View style={styles.rightButtonWrapper}>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('lostForm')
              }}>
              <Text style = {styles.buttonText}> clothing </Text>
              </TouchableOpacity>
            </View> 

            <View style={styles.leftButtonWrapper}>
              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('lostForm')
              }}>
              <Text style = {styles.buttonText}> other </Text>
              </TouchableOpacity>
            </View> 

          </View>
          </ScrollView>);}
  }

const styles = StyleSheet.create({
  leftButtonWrapper: {
    backgroundColor: '#95AA7F',
    height: 150,
    width: 170,  
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButtonWrapper: {
    backgroundColor: '#F59A81',
    height: 150,
    width: 170, 
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonText: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: '600',
  }
});