import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Fancycards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.elevated]}>
        <Image
        source={{
            uri: 'https://as1.ftcdn.net/v2/jpg/01/91/63/46/1000_F_191634678_7SLWvip1Aoh4nsrE8RD4usPWgPayEMRB.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Sunset</Text>
            <Text style={styles.cardLabel}>The sky is beautiful</Text>
            <Text style={styles.cardDescription}>The sky is beautiful and it's the best </Text>
            <Text style={styles.cardFooter}>The sky is beautiful and it's the best </Text>
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
    card:{
        width:360,
        height: 360,
        borderRadius: 10,
        marginVertical:12,
        marginHorizontal:16,
       
    },
    elevated:{
        backgroundColor:'#FFFFFF',
        elevation: 3,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
        height:250,
        width:'100%',
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex :1,
        flexGrow: 1,
        paddingHorizontal:10
    },
    cardTitle:{
        color:'#000000',
        fontSize:23,
        fontFamily: 'sans-crief',
        fontWeight: 'bold'
    },
    cardLabel:{
        color:'#000000'
    },
    cardDescription:{
        color:'#000000',
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        color:'#000000'
    }
})