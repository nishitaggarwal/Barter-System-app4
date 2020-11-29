import React, { Component} from 'react';
import { Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen'
import HomeScreen from '../screens/HomeScreen'

export const AppTabNavigator = createBottomTabNavigator({
    DonateItems:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel:"Donate Items"
        }
    },
    ItemRequest:{
        screen:ExchangeScreen,
        navigationOptions:{
            tabBarLabel:"Item Request"
        }
    },
})