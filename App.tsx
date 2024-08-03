"use client"

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import AccountBalanceScreen from "./src/screens/AccountBalance";
import TransactionsScreen from "./src/screens/TransactionsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AccountBalance" component={AccountBalanceScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
    </Tab.Navigator>
  );
}


function App(): React.JSX.Element {
  

  return (
  <NavigationContainer>
    <BottomTabNavigation />
  </NavigationContainer>
  );
}

export default App;
