// Home Screen of Application

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import myTabBar from '../components/bottom-tab-navigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountBalance from './AccountBalance';
import TransactionsScreen from './TransactionsScreen';


export default function HomeScreen( { navigation } ) {

    const Tab = createBottomTabNavigator();

    function BottomTabNavigation() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="AccountBalance" component={AccountBalance} />
                <Tab.Screen name="Transactions" component={TransactionsScreen} />
            </Tab.Navigator>
        );
    }

    return(
        <SafeAreaView>
            <View>
                <Text>Wanna Save Me - Expense Tracker</Text>
                {/* <BottomTabNavigation /> */}
                <Button title="Home Screen" onPress={ () => navigation.navigate('') } />
                <Button title="Account Balance" onPress={ () => navigation.navigate('AccountBalance') } />
                <Button title="Transactions" onPress={ () => navigation.navigate('Transactions')} /> 
            </View>
        </SafeAreaView>
    );
}