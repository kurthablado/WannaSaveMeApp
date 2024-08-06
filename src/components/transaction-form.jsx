"use client"

import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View, } from "react-native";
import DatePicker from "react-native-date-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryDropdown from "./dropdown";
import { mainStyles } from "../assets/styles/styles";


export default function TransactionsForm({handleAddTransaction}) {
    
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date());
    const [category, setCategory] = useState("");
    

    const handleSubmit = () => {
        const parsedAmount = parseFloat(amount);
        
        // Ensures a number is entered
        if (isNaN(parsedAmount) || parsedAmount <=0 ) {
            Alert.alert("Invalid amount", "Please enter a valid amount");
            return;
        }

        let newTransaction = {
            amount: parsedAmount,
            date: date.toDateString(),
            category: category
        }

        
        handleAddTransaction(newTransaction); // Add transaction to list
       

        setAmount(""); // Clear input for amount
        setCategory(""); // Clear input for category
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