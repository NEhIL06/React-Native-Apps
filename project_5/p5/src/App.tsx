import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { 
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { trigger } from "react-native-haptic-feedback";


import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

 
type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice1 = ({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View>
      <Image 
      style={styles.diceImage}
      source={imageUrl}
      />
      
    </View>
  )
}

const Dice2 = ({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View>
      <Image 
      style={styles.diceImage}
      source={imageUrl}
      />
      
    </View>
  )
}
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function App(): React.JSX.Element {
  const [diceImage1,setDiceImage1] = useState<ImageSourcePropType>(DiceOne)
  const [diceImage2,setDiceImage2] = useState<ImageSourcePropType>(DiceOne)
  const [diceNum1,setDiceNum1] =useState(1)
  const [diceNum2,setDiceNum2] =useState(1)
  const rollDice1 = () => {
    let randomNumber1 = Math.floor(Math.random()*6)+1;
    switch (randomNumber1) {
      case 1: 
        setDiceImage1(DiceOne)
        setDiceNum1(1)
        break;
      case 2: 
        setDiceImage1(DiceTwo)
        setDiceNum1(2)
        break;
      case 3: 
        setDiceImage1(DiceThree)
        setDiceNum1(3)
        break;
      case 4: 
        setDiceImage1(DiceFour)
        setDiceNum1(4)
        break;  
      case 5: 
        setDiceImage1(DiceFive)
        setDiceNum1(5)
        break;
      case 6: 
        setDiceImage1(DiceSix)
        setDiceNum1(6)
        break;    
      default:
        setDiceImage1(DiceOne)
        setDiceNum1(1)
        break;
    }

    let randomNumber2 = Math.floor(Math.random()*6)+1;
    switch (randomNumber2) {
      case 1: 
        setDiceImage2(DiceOne)
        setDiceNum2(1)
        break;
      case 2: 
        setDiceImage2(DiceTwo)
        setDiceNum2(2)
        break;
      case 3: 
        setDiceImage2(DiceThree)
        setDiceNum2(3)
        break;
      case 4: 
        setDiceImage2(DiceFour)
        setDiceNum2(4)
        break;  
      case 5: 
        setDiceImage2(DiceFive)
        setDiceNum2(5)
        break;
      case 6: 
        setDiceImage2(DiceSix)
        setDiceNum2(6)
        break;    
      default:
        setDiceImage2(DiceOne)
        setDiceNum2(1)
        break;
    }
    trigger("impactLight", options);
  }
  
  return (
    <View style={styles.Container}>
      <View>
      <Text style={styles.rollDiceBtnText}>{diceNum1}</Text>
      <Dice1
      imageUrl={diceImage1}
      />
      </View>
      <View>
      <Text style={styles.rollDiceBtnText}>{diceNum2}</Text>
      <Dice1
      imageUrl={diceImage2}
      />
      <Pressable onPress={rollDice1} style={styles.Btn}>
       <Text style={styles.rollDiceBtnText} >Roll The dice</Text> 
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex:1,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'#FFF2F2'
  },
 diceContainer:{
  margin:12,
 },
  diceImage:{
    width:200,
    height:200,
    borderRadius:15
  },
  Btn:{
    margin:10
  },
  rollDiceBtnText:{
    paddingVertical:10,
    paddingHorizontal:40,
    borderWidth:2,
    borderRadius:8,
    borderColor:'#E5E0FF',
    fontSize:16,
    color:'#8EA7E9',
    fontWeight:'700',
    textTransform: 'uppercase'
  }
});

export default App;
