
function MyTabBar({ navigation }) {
    return (
      <View>
        <Button
            title="Home"
            onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate('HomeScreen');
            }}
        />

        <Button
            title="Account"
            onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate('AccountBalance');
            }}
        />

        <Button
        title="Transactions"
        onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate('TransactionsScreen');
        }}
        />
    </View>
    );
  }