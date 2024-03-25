import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reducers from '../reducers/PeopleReducer';
import PeopleList from './peopleList';
import { TabNavigation } from './navigation';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// type Props = {};
export default function App(Props) {
  
  return (
    <Provider store = {store}>
      {/* <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <StatusBar style="auto" /> */}
        <TabNavigation/>
    </Provider>
        
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
