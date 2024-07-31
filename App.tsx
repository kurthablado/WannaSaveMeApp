"use client"

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import AccountBalanceScreen from "./src/screens/AccountBalance";
import TransactionsScreen from "./src/screens/Transactions";

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  

  return (
  <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AccountBalance" component={AccountBalanceScreen} />
      <Stack.Screen name="Transactions" component={TransactionsScreen} />
    </Stack.Navigator>
    
  </NavigationContainer>
  );
}

export default App;
