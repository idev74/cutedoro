import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function Sounds() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sounds!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});