import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Elevatedcards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevatedcards</Text>
      <ScrollView horizontal={true} style={styles.container} >
        <View style={[styles.card,styles.elevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>
                me 
            </Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>
                to 
            </Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>
                scroll
            </Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
            <Text>
                more
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:50,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:10,
        margin:10,
        color:'#000'
      },
      elevated:{
         backgroundColor:'#00CCCD',
         elevation:10,
         shadowOffset: {
            width: 10,height:10
         },
         shadowColor: 'red',
         shadowOpacity: 0.9,
         shadowRadius: 2,
         
      },
      container:{
        padding:10
      }
})