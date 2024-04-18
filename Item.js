import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Item(props) {
  const { data, index } = props
  const { breed } = data
  const keys = Object.keys(data).filter(key => key != 'breed')

  const average = (keys.reduce((acc, key) => {
    return acc += data[key]
  }, 0) / keys.length).toFixed(1)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{index}. {breed}: {average}</Text>
      {keys.map((key) => (
        <View key={key}>
          <Text style={styles.individual}>{key}: {data[key]}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 2,
    backgroundColor: '#dfc5fe',
  },
  label: {
    color: '#aa336a',
    fontSize: 28,
    fontWeight: 'bold',
  },
  individual: {
    color: '#301934',
    fontSize: 17,
    margin: 1,
  },
})

