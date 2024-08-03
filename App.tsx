"use client"

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import AccountBalanceScreen from "./src/screens/AccountBalance";
import TransactionsScreen from "./src/screens/TransactionsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text } from "react-native";
import { mainStyles } from "./src/assets/styles/styles";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Account Balance" component={AccountBalanceScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );
}


function App(): React.JSX.Element {
  

  return (
  <NavigationContainer>
    <Text style={mainStyles.appTitle}>Wanna Save Me - Expense Tracker</Text>
    <BottomTabNavigation />
  </NavigationContainer>
  );
}

export default App;
