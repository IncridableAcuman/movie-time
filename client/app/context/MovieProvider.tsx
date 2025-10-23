import React, { useContext } from 'react'
import { createContext } from 'vm'

const MovieContext=createContext();

export const MovieProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <MovieContext.Provider value={{}}>
        {children}
    </MovieContext.Provider>
    </>
  )
}

export const UseMovie=()=>{
   const context=useContext(MovieContext);
   return context;
}