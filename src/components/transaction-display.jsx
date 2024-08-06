import { FlatList, View, Text } from "react-native";
import { mainStyles } from "../assets/styles/styles";

// Display a list of transactions
function TransactionDisplay({ transactions = [] }) {

const recentTransactions = transactions.slice(0, 5);

    return (
        <View style={mainStyles.transactionHistory}>
            {/* If there are no transactions, returns 'No Transactions Yet' */}
            {transactions.length === 0 ? (<Text style={{margin: 10}}>No transactions yet</Text>
            ) : (
                    
                // Otherwise, maps through the transactions and displays each transaction
                <FlatList
                    data={recentTransactions}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={mainStyles.transaction}>
                            <Text>Category: {item.category}</Text>
                            <Text>Amount: ${item.amount.toFixed(2)}</Text>
                            <Text>Date: {new Date(item.date).toDateString()}</Text>
                        </View>
                    )}
                /> 
                
            )}

        </View>
    );
}

export default TransactionDisplay;

