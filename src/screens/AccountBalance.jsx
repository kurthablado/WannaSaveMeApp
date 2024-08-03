// Account Balance Screen

import React, { useState } from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import { mainStyles } from "../assets/styles/styles";
import TransactionsForm from "../components/transaction-form";

const transactionData = [];

export default function AccountBalanceScreen() {

    const [balance, setBalance] = useState(0);
    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [transactions, setTransactions] = useState(transactionData);

    const handleAddExpense = () => {

        console.log("Add Expense:", { expenseName, expenseAmount, expenseDate });
    };


    
    // Add new transaction to the list
    const submitTransaction = (newTransaction) => {

        // Copies the existing transactions list and adds on new transactions
        setTransactions([...transactions, newTransaction]);
    }

    return (
        <View>
            <Text style={mainStyles.heading}>Current Balance</Text>
            
            {/* Component to add a new transaction */}
            <View>
                <TransactionsForm handleNewTransaction={submitTransaction} />
            </View>
        </View>
    );
}