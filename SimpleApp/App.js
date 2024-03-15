import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { AppPro } from './AppPro';

export default function App() {
  return (
    // <SafeAreaView>
    // <View style={styles.container}>
    //   <Text>Hello World !</Text>
    // </View>
    <AppPro></AppPro>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
