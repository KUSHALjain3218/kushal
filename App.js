import { StatusBar } from 'expo-status-bar';
import React from 'react';
import TransactionScreen from "./screens/Instagram"; 
import SearchScreen from "./screens/Facebook";
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottonNavigator} from "react-navigation-tabs"

export default function App() {
  return (
    <View >
     <AppContainer/>
    </View>
  );
}

const TabNavigator = createBottonNavigator({
  Instagram:{screen:Instagram},
 Facebook:{screen:Facebook}
})
const AppContainer = createAppContainer(TabNavigator);