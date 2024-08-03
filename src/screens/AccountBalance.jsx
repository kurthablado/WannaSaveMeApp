// Account Balance Screen

import React, { useState } from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";

export default function AccountBalanceScreen() {

    const [balance, setBalance] = useState(0);
    const [expenseName, setExpenseName] = useState("");
    const [expenseAmount, setExpenseAmount] = useState("");
    const [expenseDate, setExpenseDate] = useState("");

    const handleAddExpense = () => {

        console.log("Add Expense:", { expenseName, expenseAmount, expenseDate });
    };

    return (
        <View>
            <Text>Account Balance</Text>
        </View>
    );
}