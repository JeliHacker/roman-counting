// screens/GameScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import numToRoman from '../utils/converter';

const GameScreen = () => {
  const [number, setNumber] = useState('');
  const [romanNumeral, setRomanNumeral] = useState('');

  const convertToRoman = () => {
    const result = numToRoman(parseInt(number, 10));
    setRomanNumeral(result);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
        <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Enter a number"
            value={number}
            onChangeText={setNumber}
        />
        <Button title="Convert" onPress={convertToRoman} />
        <Text style={styles.result}>Roman Numeral: {romanNumeral}</Text>
        </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: '80%',
  },
  result: {
    marginTop: 20,
    fontSize: 20,
  },
});

export default GameScreen;
