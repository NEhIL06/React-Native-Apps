import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from "@react-navigation/native-stack"

import {RootStackParamList} from "../App"

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>
const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.smallText}>home</Text>
      <Pressable
      style={styles.btn}
      onPress={()=>navigation.navigate('Details',{productId: "86"})}
      >
        <Text>Go To Details</Text>
      </Pressable>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    smallText:{
        color:"#000"
    },
    btn:{
      height:'auto',
      width:'75%',
      alignSelf:'center',
      borderRadius: 2,
      backgroundColor: '#000',
      color:'#FFF',
      elevation: 2,
      shadowOffset: {
      width: 1,
      height: 1,
      },
      shadowColor: '#333',
      shadowOpacity: 0.1,
      shadowRadius: 1,
    }
})