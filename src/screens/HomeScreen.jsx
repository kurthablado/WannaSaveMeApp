import { useState } from "react";
import { View, Text, SafeAreaView } from 'react-native';
import BudgetButton from '../components/monthly-budget';
import AccountBalanceButton from '../components/account-balance';
import TransactionDisplay from '../components/transaction-display';
import TransactionsForm from "../components/transaction-form";

export default function HomeScreen() {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 10 }}>
                <BudgetButton />
                <AccountBalanceButton />
                <TransactionDisplay />
            </View> 
        </SafeAreaView>
    );
}