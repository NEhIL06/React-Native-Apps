import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import Elevatedcards from './components/Elevatedcards'
import Fancycards from './components/Fancycards'
import Actioncards from './components/Actioncards'
import Contactlist from './components/Contactlist'
const App = () => {
  return (
    <SafeAreaView style={{}}>
      <ScrollView>   
      <Flatcards/>
      <Elevatedcards/>
      <Fancycards/>
      <Contactlist/>
      <Actioncards/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App