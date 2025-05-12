import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from "@react-navigation/native-stack"

import {RootStackParamList} from "../App"
import { useNavigation } from '@react-navigation/native'
import {NativeStackNavigationProp}  from '@react-navigation/native-stack'
type DetailsProps = NativeStackScreenProps<RootStackParamList,'Details'>

const Details = ({route}:DetailsProps) => {

  const {productId} = route.params

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>() //How to use and configure the Hook of navigation using the typescript features
  return (
    <View style={styles.constainer}>
      <Text style={styles.smallText} >Details: {productId}</Text>
      <Button title='Go to Home' onPress={()=> navigation.goBack()}/>
      <Button title='Go to First' onPress={()=> navigation.popToTop()}/>   
    </View>
    //We can use replace to remove the login page from being accessed again when we enter the app
  )
}

export default Details

const styles = StyleSheet.create({constainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
},
smallText:{
    color:"#000",
    fontSize:50
}})