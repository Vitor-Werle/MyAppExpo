import { StyleSheet, View } from 'react-native';
import React from 'react';
import Title from "./src/components/Title/Title"
import Form from './src/components/Title/Form'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});
