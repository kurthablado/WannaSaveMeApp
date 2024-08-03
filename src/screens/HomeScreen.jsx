// Home Screen of Application

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountBalance from './AccountBalance';
import TransactionsScreen from './TransactionsScreen';
import { mainStyles } from '../assets/styles/styles';


export default function HomeScreen() {

    

    return(
        <SafeAreaView>
            <View>
                <Text style={mainStyles.heading}>Welcome to your portal to savings!</Text>
                <Text style={mainStyles.subheading}>Choose an option below</Text>
            </View>
        </SafeAreaView>
    );
}