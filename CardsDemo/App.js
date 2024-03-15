import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/flatcards';
import ElevatedCards from './components/elevatedcards';
import FancyCards from './components/fancycards';
import ActionCards from './components/actioncards';
import ContactList from './components/contactlist';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      {/* <Text>APP</Text> */}
      <FlatCards/>
      <ElevatedCards/>
      <FancyCards/>
      {/* <FancyCards/> */}
      <ActionCards/>
      <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
