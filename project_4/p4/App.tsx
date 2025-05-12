import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
function App(): React.JSX.Element {
  const [randomBackground,setRandomBackground] = useState('#ffffff');
  const generateColor = ()=> {
    const hex="0123456789ABCDEF"
    let color="#"
    for (let index = 0; index < 6; index++) {
      color+=hex[Math.floor(Math.random()*16)] 
    }
    setRandomBackground(color)
  }
  
  return (
    <>
    <StatusBar backgroundColor={"#000"}></StatusBar>
    <View style={[styles.container,{backgroundColor:randomBackground}]}>
      <TouchableOpacity onPress={generateColor}>
        <View style={styles.Btn}>
          <Text style={styles.BtnTxt}> Press Me</Text>
        </View>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  Btn:{
    borderRadius:12,
    backgroundColor:"#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal:40
  },
  BtnTxt:{
    fontSize:24,
    color:'#FFFFFF',
    textTransform:'uppercase'
  }
});

export default App;
