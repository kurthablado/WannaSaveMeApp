// Home Screen of Application

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountBalance from './AccountBalance';
import TransactionsScreen from './TransactionsScreen';
import { mainStyles } from '../assets/styles/styles';
import TransactionDisplay from '../components/transaction-display';
import BudgetButton from '../components/monthly-budget';


export default function HomeScreen() {

    return(
        <SafeAreaView>
            <View>
                <BudgetButton />
            </View>

            <View>
                <Text>Amount Spent</Text>
            </View>

            <View>
                <Text>Your Account Balance</Text>
            </View>

            <View>
                <Text>Recent Transactions</Text>
            </View>
        </SafeAreaView>
    );
}