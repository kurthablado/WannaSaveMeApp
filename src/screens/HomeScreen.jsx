import { useState } from "react";
import { View, Text, SafeAreaView } from 'react-native';
import BudgetButton from '../components/monthly-budget';
import AccountBalanceButton from '../components/account-balance';
import TransactionDisplay from '../components/transaction-display';
import Transactions from '../components/transaction-form'; // Adjust import path if necessary

export default function HomeScreen() {
    const [transactions, setTransactions] = useState([]);

    const handleNewTransaction = (transaction) => {
        setTransactions((prevTransactions) => [transaction, ...prevTransactions]);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 10 }}>
                <BudgetButton />
                <AccountBalanceButton />
                <TransactionDisplay transactions={transactions} style={{flex: 1, alignItems: 'centre'}}/>
            </View>
        </SafeAreaView>
    );
}