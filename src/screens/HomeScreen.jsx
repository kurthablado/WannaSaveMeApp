// Home Screen of Application

import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import NavigationTabs from '../components/navigation-tabs';

export default function HomeScreen( { navigation } ) {

    return(
        // <NavigationTabs />

             <View>
                 <Text>Wanna Save Me - Expense Tracker</Text>
                 <Button title="Account Balance" onPress={() => navigation.navigate('AccountBalance')} />
                 <Button title="Transactions" onPress={() => navigation.navigate('Transactions')} />
            </View>
    );
}