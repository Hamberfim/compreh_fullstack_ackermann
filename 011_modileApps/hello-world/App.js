import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');

  return (
    <View style={styles.container}>
      <Text>
        Hello {firstName} {lastName}
      </Text>

      <TextInput style={styles.input} onChangeText={onChangeFirstName} value={firstName} placeholder="First Name" />
      <TextInput style={styles.input} onChangeText={onChangeLastName} value={lastName} placeholder="Last Name" />

      <Button title="Click Here" onPress={() => Alert.alert(`Hello ${firstName} ${lastName}`)} />

      <StatusBar style="auto" />
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
  input: {
    height: 40,
    width: '80%',
    padding: 12,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
  },
});
