import React, { useContext, useState,  createContext } from 'react';
import MovieContextType from '../interface/movieType.interface';
import IMovie from '../interface/movie.interface';
import toast from 'react-hot-toast';
import axios from 'axios';

const MovieContext=createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({children}:{children:React.ReactNode}) => {
  const [movies,setMovies]=useState<IMovie[]>([]);
  const [loading,setLoading]=useState<boolean>(false);

  const fetchMovies = async (category:string)=>{
    try {
      setLoading(true);
      const {data} = await axios.get(`${process.env.BASE_URL}/movies/${category}`);
      setMovies(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error fetching movies:");
    } finally{
      setLoading(false);
    }
  }

  return (
    <>
    <MovieContext.Provider value={{movies,setMovies,loading,fetchMovies}}>
        {children}
    </MovieContext.Provider>
    </>
  )
}

export const UseMovie=()=>{
   const context=useContext(MovieContext);
   return context;
}