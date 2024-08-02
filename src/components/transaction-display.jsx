import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Transactions from "./transaction-form";

// Display a list of transactions
function TransactionDisplay({ transactions }) {
    return (
        <View>
            <Text>Transactions</Text>
            
            {/* If there are no transactions, returns 'No Transactions Yet' */}
            {transactions.length === 0 ? (<Text>No transactions yet</Text>
            ) : (

                // Otherwise, maps through the transactions and displays each transaction
                transactions.map((transaction, index) => (
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
