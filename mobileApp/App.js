
import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';


import home from './screens/home.js';
import lostCategory from './screens/lostCategory.js';
import lostForm from './screens/lostForm.js';
import lostResult from './screens/lostResult.js';
import lostList from './screens/lostList.js';
import foundCategory from './screens/foundCategory.js';
import foundForm from './screens/foundForm.js';
import foundResult from './screens/foundResult.js';
import foundList from './screens/foundList.js';
import message from './screens/message.js';
import account from './screens/account.js';

//This is the first page the app goes to, but this holds all the screens
//and then navigates to the first one
const homeStack = createStackNavigator({
  home: { screen: home},
  lostCategory: {screen: lostCategory},
  lostForm: {screen: lostForm},
  lostResult:{
      screen:lostResult
    },
  foundCategory: {screen: foundCategory},
  foundForm: {screen: foundForm},
  foundResult:{
      screen:foundResult
    },
  message:{
    screen:message
  }
});

export default Navigation = createBottomTabNavigator(
  {
    home:{
      screen: homeStack
    },
    lost:{
      screen: lostList
    },
    found:{
      screen: foundList
    },
    account:{
      screen: account
    }

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'lost') {
          iconName = `ios-remove-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'found') {
          iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'account') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
)
















