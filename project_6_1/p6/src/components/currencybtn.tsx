import React from 'react'
import type { PropsWithChildren } from 'react'
import {View, Text, StyleSheet} from 'react-native'

type currencybtnProps = PropsWithChildren<{
    name: string;
    flag: string;
}>

const currencybtn = (props:currencybtnProps):JSX.Element => {
    return(
        <View style={styles.container}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        alignItems:'center'
    },
    flag:{
        fontSize:28,
        color:"#FFFFFF",
        marginBottom: 4
    },
    country:{
        fontSize:14,
        color: "#F0F0F0" 
    }
})

export default currencybtn
