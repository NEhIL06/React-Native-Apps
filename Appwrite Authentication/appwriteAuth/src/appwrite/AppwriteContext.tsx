import React, { createContext, FC, PropsWithChildren, useState } from 'react'
import Appwrite from './service'

//typesafety
type AppwriteContextType ={
    appwrite: Appwrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void
}
export const AppwriteContext = createContext<AppwriteContextType>({
    appwrite: new Appwrite(),
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

export const AppwriteProvider: FC<PropsWithChildren> = ({children}) => {

    const[isLoggedIn,setIsLoggedIn] = useState(false)
    const defaultValue = {
        appwrite: new Appwrite(),
        isLoggedIn,
        setIsLoggedIn
    }
  return (
    <AppwriteContext.Provider value={defaultValue}>
      {children}
    </AppwriteContext.Provider>
  )
}

export default AppwriteContext