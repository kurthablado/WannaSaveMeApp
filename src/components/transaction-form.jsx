"use client"

import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View, } from "react-native";
import DatePicker from "react-native-date-picker";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Transactions( {handleNewTransaction} ) {
    
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [category, setCategory] = useState("");

    // TODO:
    // 1. Change category from input to dropdown
    // 2. Styling

    const handleSubmit = () => {
        const parsedAmount = parseFloat(amount);
        
        // Ensures a number is entered
        if (isNaN(parsedAmount)) {
            Alert("Please enter a number for the amount");
            return;
        }

        let newTransaction = {
            amount: amount,
            date: date,
            category: category
        }
        handleNewTransaction(newTransaction);
        setAmount(0); // Clear input for amount
        setCategory(''); // Clear input for category
        setDate(new Date()); // Reset date to current date
    }

    return (
        <SafeAreaView>
            <View style={{ padding: 20 }}>
                <Text>Transactions</Text>
                <Text>Amount: </Text>
                <TextInput
                    keyboardType="numeric"
                    onChangeText={setAmount}
                    value={amount}
                    placeholder="Enter amount"
                />
                <Text>Date: </Text>
                <DatePicker date={date} onDateChange={setDate} />
                <Text>Category: </Text>
                <TextInput
                    onChangeText={setCategory}
                    value={category}
                    placeholder="Enter category"
                />
                <Pressable onPress={handleSubmit} style={{ marginTop: 20 }}>
                    <Text>Add Transaction</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}