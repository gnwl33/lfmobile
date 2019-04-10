import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (

      <ScrollView> // everything inside is scrollable

        <View style={styles.topBar}> // adds hidden containers (like div; it's just a wrapper)
          <Text style={styles.topText}> Found Around </Text> 
        </View> 
        <View style={styles.container}>

          <Image style={styles.image} source={require('../assets/slackLogoAnimated.gif')}/>
        </View>

        <View style={styles.secondContainer}>

          <View style={styles.textContainer}> 

            <Text style={styles.secondContainerHeadline}> Found Around </Text> 

            <Text style={styles.secondContainerText}> Direct messaging is simple </Text> 

            <Text style={styles.secondContainerText}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim. sed do eiusmod tempor incididunt. </Text> 

          </View> 

          <View style={styles.buttonWrapper}>


            <Button
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              title="Show Me Slack!"
              color="#fff"
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>

            <View style={styles.rowButtonWrapper}>

              <Button
              onPress={() => {
                navigate('Second')
              }}
              title="Lost"
              color="#fff"
              />
            </View> 

           <View style={styles.rowButtonWrapper}>

              <Button
              onPress={() => {
                navigate('Second')
              }}
              title="Lost"
              color="#fff"
              />
            </View> 

          </View>
          </View> 

                <View style={styles.thirdContainer}>

          <View style={styles.textContainer}> 

            <Text style={styles.secondContainerHeadline}> Slack Is Easy to Use </Text> 

            <Text style={styles.secondContainerText}> Direct messaging is simple </Text> 

            <Text style={styles.secondContainerText}> Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim. sed do eiusmod tempor incididunt. </Text> 

          </View> 

          <View style={styles.buttonWrapper}>


            <Button
              onPress={() => {
                Alert.alert('You tapped the button!');
              }}
              title="Show Me Slack!"
              color="#fff"
            />
          </View> 
        </View> 

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
  thirdContainer: {
    backgroundColor: 'white',
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

  },
  rowButtonWrapper: {

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
