"use client"

import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View, } from "react-native";
import DatePicker from "react-native-date-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryDropdown from "./dropdown";
import { StyleSheet } from "react-native";
import { mainStyles } from "../assets/styles/styles";

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
                <Text style={mainStyles.label}>Amount: </Text>
                <TextInput
                    keyboardType="numeric"
                    onChangeText={setAmount}
                    value={amount}
                    placeholder="Enter amount"
                    style={mainStyles.input}
                />
                <View style={{ paddingBottom: 10}}>
                    <Text style={mainStyles.label}>Date: </Text>
                    <DatePicker date={date} onDateChange={setDate} />
                </View>
                <View style={{ paddingBottom: 10 }}>
                    <Text style={mainStyles.label}> Category: </Text>
                    <CategoryDropdown category={category} onPress={setCategory} />
                </View>
                <Pressable onPress={handleSubmit} style={mainStyles.btn}>
                    <Text>Add Transaction</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}