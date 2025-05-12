import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar'

import Icons from './components/icons'



function App():JSX.Element {
  const [gameState,setgameState] = useState(new Array(9).fill('empty',0,9))
  const [winner,setWinner] = useState<string>('')
  const [isCross,setIsCross] = useState<boolean>(false)

  const resetGame = () =>{
    setWinner('')
    setIsCross(false)
    setgameState(new Array(9).fill('empty',0,9))
  }

  const gameWinner =() =>{
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setWinner('Draw game... ⌛️');
    }
  }

  const onChangeItem = (itemNumber:number) =>{
    if(winner){
      return Snackbar.show({
        text:winner,
        backgroundColor:'black',
        textColor:'white' 
      })
    }

    if(gameState[itemNumber] === 'empty'){
      gameState[itemNumber] = isCross ? 'cross':'circle' ///////CHECK
      setIsCross(!isCross)
    }else{
      return Snackbar.show({
        text:"Position already filled",
        backgroundColor:'red',
        textColor: 'white'
      })
    }
    gameWinner()
  }


  return (
     <SafeAreaView>
      <StatusBar
      />
     {winner ? (
      <View style={[styles.playerInfo,styles.winnerInfo]}>
        <Text style={styles.winnerTxt}>{winner}</Text>
      </View>
     ) : (
      <View style={[
        styles.playerInfo,
        isCross? styles.playerX:styles.playerO
      ]}>
      <Text style={styles.gameTurnTxt}>
        Player {isCross? 'X' : 'O'}'s turn
      </Text>
      </View>
     )}
     
     <FlatList
    numColumns={3}
    data={gameState}
    style={styles.grid}
    renderItem={({item,index})=>( //Check and Understand how item is working
      <Pressable 
      key={index}
      style={styles.card}
      onPress={()=>onChangeItem(index)}
      >
        <Icons name={item}/>
      </Pressable>
    )}
     />

     <Pressable style={styles.gameBtn} onPress={()=>{resetGame()}}>
      <Text style={styles.gameBtnText}> {winner ? 'Start new game': 'Reset'}</Text>
     </Pressable>
     </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
})
export default App;
