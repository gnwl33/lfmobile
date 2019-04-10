import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert } from 'react-native';
import {List, ListItem, Avatar} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>

        <View style ={styles.containerText}>
       
        <Image style={styles.image} source={require('../assets/profile.png')}/>\
        </View>

        <View style = {styles.Text}>
       
        <Text style = {styles.Text}>Jane Doe</Text>
        </View>

      <List>
        <ListItem
        title='Personal Info'
        avatar={<Avatar
          height={40}
        icon={{name: 'edit', type: 'font-awesome'}}
        />}
      />
      <ListItem
        title='Lost Items'
        avatar={<Avatar
          height={40}
        icon={{name: 'minus-circle', type: 'font-awesome'}}
        />}
      />
      <ListItem
        title='Found Items'
        avatar={<Avatar
          height={40}
        icon={{name: 'plus-circle', type: 'font-awesome'}}
        />}
      />
      <ListItem
        title='Promos'
        avatar={<Avatar
          height={40}
        icon={{name: 'dollar', type: 'font-awesome'}}
        />}
      />
      </List>

      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({

  Text:{
    fontSize: 26,
    alignItems:'center',
    fontWeight: '600',
    marginBottom: 15
  },

  containerText: { 
    marginTop: 97,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 27
  },
});

// backgroundColor: '#87D8ED',
