import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Transactions from "./transaction-form";

// Display a list of transactions
function TransactionDisplay({ transactions }) {
    return (
        <View>
            <Text>Transactions</Text>
            {transactions.length === 0 ? (<Text>No transactions yet</Text>
            ) : (
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

// Pass prop to Transaction component
// export default function TransactionsScreen( {TransactionDisplay}) {

//     return(
//         <SafeAreaView>
//             <FlatList
//             data={TransactionDisplay}
//             renderItem={ ({item}) => <Transactions transaction={item} /> }
//             keyExtractor={ item => item.id} />
//         </SafeAreaView>
//     );
// }
