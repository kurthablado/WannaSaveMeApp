// Account Balance Screen

import React, { useState } from "react";
import { SafeAreaView, FlatList, Text, View } from "react-native";
import { mainStyles } from "../assets/styles/styles";
import TransactionsForm from "../components/transaction-form";
import { StyleSheet } from "react-native";
import TransactionDisplay from "../components/transaction-display";

export default function AccountBalanceScreen() {

    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);

    const handleAddTransaction = (newTransaction) => {
        const amount = parseFloat(newTransaction.amount);
        if (isNaN(amount)) {
            console.error("Invalid Amount:", newTransaction.amount);
            return;
        }   

        setTransactions((prevTransactions) => [
            ...prevTransactions,
            {id: prevTransactions.length + 1, ...newTransaction},
    ]);
        setBalance((prevBalance) => prevBalance + newTransaction.amount);
    };
    
    return (
        <SafeAreaView style={mainStyles.container}>
            <FlatList
                ListHeaderComponent={
                    <>
                        <Text style={mainStyles.heading}>Current Balance</Text>
                        <Text style={styles.balance}>${balance}</Text>
                    
                        {/* Component to add a new transaction */}
                        <View>
                            <TransactionsForm handleAddTransaction={handleAddTransaction} />
                        </View>

                        <View>
                            <TransactionDisplay transactions={transactions} />
                        </View>
                    </>
                }

                
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    balance: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});