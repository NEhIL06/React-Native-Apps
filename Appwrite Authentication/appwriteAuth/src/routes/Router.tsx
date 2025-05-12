import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {AppwriteContext} from '../appwrite/AppwriteContext'
import Loading from '../components/Loading'
//Routes
import { AuthStack } from './AuthStack'
import { AppStack } from './AppStack'



export const Router = () => {
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppwriteContext)

    //checking If UserLoggedIn If yes routing to AppStack else to AuthStack
    useEffect(() => {
     appwrite
     .getCurrentUser()
     .then(response =>{
        setIsLoading(false)
        if(response){
            setIsLoggedIn(true)
        }
     })
     .catch(_=>{
        setIsLoading(false)
        setIsLoggedIn(false)
     })
    }, [appwrite ,setIsLoggedIn])
  
    if (isLoading) {
        return <Loading/>
    }
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack/> : <AuthStack/> }
    </NavigationContainer>
  )
}

