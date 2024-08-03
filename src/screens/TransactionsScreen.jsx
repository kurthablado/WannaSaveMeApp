// Transactions Screen

import { Button, Image, SafeAreaView, Text, View } from "react-native";
import TransactionsForm from "../components/transaction-form";
import TransactionsDisplay from "../components/transaction-display";
import { useState } from "react";
import { mainStyles } from "../assets/styles/styles";

const transactionData = [];

export default function TransactionsScreen() {
    
    const [transactions, setTransactions] = useState(transactionData);

    return (
        <SafeAreaView>
            <Text style={mainStyles.subheading}>Transaction History</Text>

            {/* Displays transactions */}
            <View>
                <TransactionsDisplay transactions={transactions} />
            </View>
        </SafeAreaView>
    );
}