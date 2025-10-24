import React, { useContext, useState } from 'react'
import { createContext } from 'vm'

const MovieContext=createContext<>();

export const MovieProvider = ({children}:{children:React.ReactNode}) => {
  const [movies,setMovies]=useState([]);
  return (
    <>
    <MovieContext.Provider value={{movies,setMovies}}>
        {children}
    </MovieContext.Provider>
    </>
  )
}

export const UseMovie=()=>{
   const context=useContext(MovieContext);
   return context;
}