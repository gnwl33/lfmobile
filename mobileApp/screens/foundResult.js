import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert } from 'react-native';
import {List, ListItem, Avatar} from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView> 
      <View style={styles.header}>
      <Text style={styles.title}>Matches:</Text> 
      </View>
      <List>
      <View style={styles.containerText}>
      <ListItem
        onPress={() => {
                this.props.navigation.navigate('message')
              }}
        title="Emory ID"
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>10/25/18 10:00pm</Text>
            <Text style={styles.ratingText}>WoodPEC</Text>
            <Text style={styles.ratingText}>Contact: John Deer</Text>
          </View>
        }
        avatar={<Avatar
          height={130}
        source={{uri:"https://www.onecard.emory.edu/1Cardphotoupload_s/images/newcard.jpg"}}
         activeOpacity={0.7}/>}
         titleNumberOfLines={0}
         subtitleNumberOfLines={0}
      />}
      </View>
      </List>  
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 header: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#F59A81',
    fontWeight: '600',
    fontSize: 24
  },
  containerText: { 
    marginTop: 50
  },

    subtitleView: {
    paddingLeft: 10,
    paddingTop: 5
  },

  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
});

// backgroundColor: '#87D8ED',
