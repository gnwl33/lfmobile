import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';

export default class App extends React.Component {

  render(){

    return (

      <ScrollView> // everything inside is scrollable
        <View style={styles.topBar}> // adds hidden containers (like div; it's just a wrapper)
          <Text style={styles.topText1}> Found <Text style={styles.topText2}>Around</Text> </Text>
        </View> 

        <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/logofa.png')}/>
        </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>

            <View style={styles.leftButtonWrapper}>

              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('lostCategory')
              }}>
              <Text style = {styles.buttonText}> Lost </Text>
              </TouchableOpacity>
            </View> 

           <View style={styles.rightButtonWrapper}>

              <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('foundCategory')
              }}>
              <Text style = {styles.buttonText}> Found </Text>
              </TouchableOpacity>

            </View> 

          </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#f6f6f6',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText1: {
    marginTop: 10, 
    fontSize: 45,
    fontFamily: 'Slabo',
    color: '#92AA7F',
    fontWeight: '600',
  },
    topText2: {
    marginTop: 10, 
    fontSize: 45,
    fontFamily: 'Slabo',
    color: '#F89988',
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
  leftButtonWrapper: {
    backgroundColor: '#F89988',
    height: 85, 
    width: 170, 
    marginTop: 27,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButtonWrapper: {
    backgroundColor: '#92AA7F',
    height: 85, 
    width: 170, 
    marginTop: 27,
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 26,
    fontWeight: '600',
    color: "#fff",
  }
});
