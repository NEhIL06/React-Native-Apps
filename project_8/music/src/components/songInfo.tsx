import React, { PropsWithChildren } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Track } from 'react-native-track-player'


type songInfoProps = PropsWithChildren<{
    track: Track | null | undefined
}>

const songInfo = ({track}: songInfoProps) => {
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.name}>
                    {track?.title}
                </Text>
                <Text style={styles.artist}>
                    {track?.artist} . {track?.album}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 18,
        color:'#FFF',
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    name: {
        marginBottom: 8,
        textAlign: 'center',
        
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
    },
    artist: {
        color:'#FFF',
        textAlign: 'center',
    },
})

export default songInfo
