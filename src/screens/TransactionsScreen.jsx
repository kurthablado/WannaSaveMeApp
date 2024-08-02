// Transactions Screen

import { Button, Image, SafeAreaView, Text, View } from "react-native";
import TransactionsForm from "../components/transaction-form";
import TransactionsDisplay from "../components/transaction-display";
import { useState } from "react";

const transactionData = [];

export default function TransactionsScreen() {

    
    const [transactions, setTransactions] = useState(transactionData);

    
    // Add new transaction to the list
    const submitTransaction = (newTransaction) => {

        // Copies the existing transactions list and adds on new transactions
        setTransactions([...transactions, newTransaction]);
    }

    return (
        <SafeAreaView>
            <Text>Transactions</Text>
            <Text>View Transactions Here</Text>

            <View>
                <TransactionsForm handleNewTransaction={submitTransaction} />
            </View>

            <View>
                <TransactionsDisplay transactions={transactions} />
            </View>
        </SafeAreaView>
    );
}