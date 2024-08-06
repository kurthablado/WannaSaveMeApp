// Transactions Screen

import { Button, Image, SafeAreaView, Text, View } from "react-native";
import TransactionsForm from "../components/transaction-form";
import TransactionDisplay from "../components/transaction-display";
import { useState } from "react";
import { mainStyles } from "../assets/styles/styles";


export default function TransactionsScreen({transactions}) {

    return (
        <SafeAreaView>
            <Text style={mainStyles.subheading}>Transaction History</Text>

            {/* Displays transactions */}
            <View>
            <TransactionDisplay transactions={transactions} />
            </View>
        </SafeAreaView>
    );
}