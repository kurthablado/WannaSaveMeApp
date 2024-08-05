import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Transactions from "./transaction-form";
import { mainStyles } from "../assets/styles/styles";

// Display a list of transactions
function TransactionDisplay({ transactions = [] }) {

const recentTransactions = transactions.slice(0, 5);

    return (
        <View style={TransactionDisplay}>
            {/* If there are no transactions, returns 'No Transactions Yet' */}
            {transactions.length === 0 ? (<Text style={{margin: 10}}>No transactions yet</Text>
            ) : (

                // Otherwise, maps through the transactions and displays each transaction
                recentTransactions.map((transaction, index) => (
                    <View key={index}>
                        <Text>Amount: ${transaction.amount}</Text>
                        <Text>Date: {new Date(transaction.date).toDateString()}</Text>
                        <Text>Category: {transaction.category}</Text>
                    </View>
            ) )
            )}
        </View>
    );
}

export default TransactionDisplay;

