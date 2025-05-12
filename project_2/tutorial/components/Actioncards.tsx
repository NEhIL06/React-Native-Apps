import { StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native'
import React from 'react'


export default function Actioncards() {
    function openWebsite(websteLink: string){
        Linking.openURL(websteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.cards,styles.elevatedcards]}>
        <View style={styles.headingcontainer}>
            <Text style={styles.headerText}>How to learn App develpoment ?</Text>
        </View>
        <Image
        source={{
            uri: 'https://kms-solutions.asia/wp-content/uploads/mobile-application-development-lifecycle-5-key-phases.jpg'
        }}
        style={styles.cardimage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.body}>
            “App development is a dynamic process that involves designing, coding, testing, and deploying software applications for various platforms. Developers use programming languages like Java, Swift, or Kotlin to create user-friendly apps that solve specific problems or enhance user experiences.”
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
                <Text>ReadMore</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => openWebsite('https://reactnative.dev/docs/linking')}>
                <Text>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    cards:{
        width: 350,
        height: 380,
        borderRadius: 10,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedcards:{
        backgroundColor:'#01CBC6',
        elevation:10,
        shadowOffset:{
            width:1,height:1
        },
        shadowColor: '#A4B0BD',
        shadowOpacity: 0.7
    },
    headingcontainer:{
        height:40,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        color: '#000',
        fontWeight:'bold'
    },
    cardimage:{
        height: '45%'
    },
    cardBody:{
        padding: 10,
        color: '#000'
    },
    body:{
        color: '#000'
    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',color: '#000'
    }
})