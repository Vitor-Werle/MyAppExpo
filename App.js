import { StyleSheet, View } from 'react-native';
import React from 'react';
import Title from "./src/components/Title/Title"
import Main from './src/components/Title/Main'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main />
    </View>
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
