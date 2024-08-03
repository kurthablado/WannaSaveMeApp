import React, { useState } from "react";
import { View, Button, Modal, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";

const BudgetButton = () => {
    const [budget, setBudget] = useState('');
    const [displayBudget, setDisplayBudget] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [input, setInput] = useState('');

    const handleButtonPress = () => {
        setModalVisible(true);
    };

    const handleSave = () => {
        setBudget(input);
        setDisplayBudget(input);
        setModalVisible(false);
        setInput('');
    };

    return (
        <View>
            <TouchableOpacity style={styles.greenButton} onPress={handleButtonPress}>
            <Text style={styles.greenButtonText}>
                {displayBudget ? `My Monthly Budget: $${displayBudget}` : 'Enter Monthly Budget'}
            </Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
             >
                <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text>Enter Monthly Budget</Text>
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
        borderWidth: 1,
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 10,
        backgroundColor: 'white',
      },
      button: {
        marginTop: 20,
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'green',
        
      },
      buttonText: {
        color: 'white',
      },

      greenButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        height: 150,
      },

      greenButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 35,
      },

    });
    
    export default BudgetButton;