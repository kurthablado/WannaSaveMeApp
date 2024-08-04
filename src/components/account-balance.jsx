"use client";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { View, Text, TouchableOpacity, Modal, TextInput } from "react-native";

export default function AccountBalanceButton() {
    const [balance, setBalance] = useState('');
    const [displayBalance, setDisplayBalance] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [input, setInput] = useState('');

    const handleButtonPress = () => {
        setModalVisible(true);
    };

    const handleSave = () => {
        setBalance(input);
        setDisplayBalance(input);
        setModalVisible(false);
        setInput('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.greenButton} onPress={handleButtonPress}>
                    <Text style={styles.greenButtonText}>
                        {displayBalance ? `My Account Balance: $${displayBalance}` : 'Enter Account Balance'}
                    </Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <Text>Enter Account Balance</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="numeric"
                            onChangeText={setInput}
                            value={input}
                        />
                        <TouchableOpacity style={styles.button} onPress={handleSave}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalView: {
        width: 300,
        backgroundColor: 'yellow',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },

    input: {
        height: 40,
        borderColor: 'gray',
        width: 200,
        marginTop: 20,
        borderWidth: 1,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },

    button: {
        marginTop: 20,
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        width: 200,
        alignItems: 'center',
    },

    buttonText: {
        color: 'white',
    },

    greenButton: {
        backgroundColor: 'green',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        width: 175,
        alignItems: 'center',
        height: 150,
        justifyContent: 'center',
        marginTop: 160,
    },

    greenButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 35,
    },
});