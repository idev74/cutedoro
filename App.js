import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, Button } from 'react-native';
import { cats, dogs } from './breeds'
import Item from './Item'

export default function App() {
  const [search, setSearch] = useState('')
  const [showDogs, setShowDogs] = useState(true)

  const showAnimal = showDogs ? dogs : cats

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidContainer}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          <FlatList
            data={cats}
            renderItem={({ item, index }) => <Item data={item} index={index} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.inputContainer}
            onChangeText={text => setSearch(text)}
            value={search}
          />
          <Button
            title="Search"
            onPress={() => console.log('search')}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardAvoidContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    width: 200 
  },
});
