import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatlist() {
  return (
    <View >
      <Text style={styles.headingText}>Flatlcards </Text>
      <View style={styles.container}>
      <View style={[styles.card,styles.cardOne]}>
        <Text>Red</Text>
      </View>
      <View style={[styles.card,styles.cardTwo]}>
        <Text>Blue</Text>
      </View>
      <View style={[styles.card,styles.cardThree]}>
        <Text>Green</Text>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText:{
      fontSize:50,
      fontWeight: 'bold',
      paddingHorizontal: 8
  },
  container:{
      flex:1,
      flexDirection:'row',
      padding: 10
    },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:100,
    borderRadius:10,
    marginLeft:10,
    margin:8,
    elevation:5
  },
  cardOne:{
    backgroundColor: 'red'
  },
  cardTwo:{
    backgroundColor: 'blue'
  },
  cardThree:{
    backgroundColor: 'green'
  }
})