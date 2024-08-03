// Home Screen of Application

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountBalance from './AccountBalance';
import TransactionsScreen from './TransactionsScreen';


export default function HomeScreen() {

    return(
        <SafeAreaView>
            <View>
                <Text>Wanna Save Me - Expense Tracker</Text>
            </View>
        </SafeAreaView>
    );
}