import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function contactlist() {
    const contacts =[
      {
        uid:1,
        name:'MAtt watson',
        status: 'This is just cool!!',
        imageUrl: 'https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp'
      },
      {
        uid:2,
        name:'Braka labe',
        status: 'This is the stuff',
        imageUrl: 'https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg'
      },
      {
        uid:3,
        name:'Nigga bada',
        status: 'This $ is da',
        imageUrl: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg'
      },
      {
        uid:4,
        name:'Rnadon Watsom',
        status: 'This is dasda',
        imageUrl: 'https://www.wilsoncenter.org/sites/default/files/styles/large/public/media/images/person/james-person-1.webp'
      }
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contactlist</Text>
      <ScrollView style={styles.container}> 
            {contacts.map(({uid,name,status,imageUrl})=>(
                <View key={uid} style={styles.usercard}>
                    <Image
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container:{
        paddingHorizontal: 16,
        marginBottom: 3
    },
    usercard:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5,
        backgroundColor:'#535C68',
        borderRadius: 10,
        padding: 5
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:30,
        marginRight:14
    },
    userName:{
        fontSize: 16,
        fontWeight: '600',
        color: '#fff'
    },
    userStatus:{
        fontSize: 12
    }
})