import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Alert } from 'react-native';
import {List, ListItem, Avatar} from 'react-native-elements'
import { SearchBar } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style = {styles.container}>
      <Image style = {styles.image} source = {require('../assets/panera.jpeg')}/>
      </View>
      <View style = {styles.containerBar}>
      <SearchBar
       showLoading
       platform="ios"
       cancelButtonTitle="Cancel"
        placeholder='Search' />
      </View> 
      <List>
      <ListItem
        onPress={() => {
                this.props.navigation.navigate('message')
              }}
        title="Emory ID"
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>10/25/18 10:00pm</Text>
            <Text style={styles.ratingText}>WoodPEC</Text>
          </View>
        }
        avatar={<Avatar
         height={130}
         source={{uri:"https://www.onecard.emory.edu/1Cardphotoupload_s/images/newcard.jpg"}}
         activeOpacity={0.7}/>}
         titleNumberOfLines={0}
         subtitleNumberOfLines={0}
      />}
      />
          <ListItem
        onPress={() => {
                this.props.navigation.navigate('message')
              }}
        title="Wallet"
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>10/23/18 11:00pm</Text>
            <Text style={styles.ratingText}>Complex Smith Hall</Text>
          </View>
        }
        avatar={<Avatar
         height={130}
         source={{uri:"https://images-na.ssl-images-amazon.com/images/I/81xzRbSBYwL._SX425_.jpg"}}/>}
         activeOpacity={0.7}
         titleNumberOfLines={0}
         subtitleNumberOfLines={0}
      />}
      />  <ListItem
        onPress={() => {
                this.props.navigation.navigate('message')
              }}
        title="Jacket"
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>10/23/18 5:00pm</Text>
            <Text style={styles.ratingText}>The Depot - Kaldi's</Text>
          </View>
        }
        avatar={<Avatar
         height={130}
         source={{uri:"https://cdn.shopify.com/s/files/1/0352/5633/products/Type_MA-1_Real_McCoy_Mfg._Co_Jacket_-_Sage-04_2000x.jpg?v=1535334964"}}/>}
         activeOpacity={0.7}
         titleNumberOfLines={0}
         subtitleNumberOfLines={0}
      />}
      <ListItem
        onPress={() => {
                this.props.navigation.navigate('message')
              }}
        title="Earrings"
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>10/22/18 2:00pm</Text>
            <Text style={styles.ratingText}>WoodPEC</Text>
          </View>
        }
        avatar={<Avatar
         height={130}
         source={{uri:"https://www.brighton.com/photos/product/giant/369560S164168/-/size-os.jpg"}}/>}
         activeOpacity={0.7}
         titleNumberOfLines={0}
         subtitleNumberOfLines={0}
      />}
      />
      <ListItem
        onPress={() => {
                this.props.navigation.navigate('message')
              }}
        title="Water Bottle"
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.ratingText}>10/22/18 11:00am</Text>
            <Text style={styles.ratingText}>White Hall 208</Text>
          </View>
        }
        avatar={<Avatar
         height={130}
         source={{uri:"https://d34kame2p3gj5k.cloudfront.net/media/uploads/2018/09/05155134/10017-b18-17130.jpg"}}/>}
         activeOpacity={0.7}
         titleNumberOfLines={0}
         subtitleNumberOfLines={0}
      />}
      />  
    </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    marginTop: 45,
    height: 120
  },

  containerBar: { 
    marginTop: 20
  },

    image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
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
