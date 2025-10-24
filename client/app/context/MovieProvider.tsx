'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react';
import MovieContextType from '../interface/movieType.interface';
import IMovie from '../interface/movie.interface';
import toast from 'react-hot-toast';
import axios from 'axios';

const MovieContext=createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({children}:{children:ReactNode}) => {
  const [movies,setMovies]=useState<IMovie[]>([]);
  const [loading,setLoading]=useState<boolean>(false);

  const fetchMovies = async (category:string)=>{
    try {
      setLoading(true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/movies/${category}`);
      setMovies(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error fetching movies:");
    } finally{
      setLoading(false);
    }
  }

  const fetchTv = async (category:string)=>{
    try {
      setLoading(true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tv/${category}`);
      setMovies(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error fetching movies:");
    } finally{
      setLoading(false);
    }
  }

  const fetchGeneres = async (category:string)=>{
     try {
      setLoading(true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/genres/${category}`);
      setMovies(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error fetching movies:");
    } finally{
      setLoading(false);
    }
  }

  const fetchCartoons = async ()=>{
     try {
      setLoading(true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoons`);
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
    <MovieContext.Provider value={{movies,setMovies,loading,fetchMovies,fetchTv,fetchGeneres,fetchCartoons}}>
        {children}
    </MovieContext.Provider>
    </>
  )
}

export const useMovie=()=>{
   const context=useContext(MovieContext);
   return context;
}