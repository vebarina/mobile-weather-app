import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import Dropdown from './src/components/Dropdown';

export default function App() {

  console.log("hola");
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content} >
        <Dropdown />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87aed8',
  },
  content: {
    flex: 10,
    backgroundColor: '#fbfbfb',
    alignItems: 'center',
    padding: 30,
  },
});
