'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react';
import MovieContextType from '../interface/movieType.interface';
import IMovie from '../interface/movie.interface';
import toast from 'react-hot-toast';
import axios from 'axios';

const MovieContext=createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({children}:{children:ReactNode}) => {
  const [cartoons,setCartoons]=useState<IMovie[]>([]);
  const [popular,setPopular]=useState<IMovie[]>([]);
  const [topRated,setTopRated]=useState<IMovie[]>([]);
  const [upcoming,setUpcoming]=useState<IMovie[]>([]);
  const [nowPlaying,setNowPlaying]=useState<IMovie[]>([]);
  const [loading,setLoading]=useState<Record<string,boolean>>({});
  const [genres,setGenres]=useState<IMovie[]>([]);

  const setLoadingState= (key:string,value:boolean) =>
    setLoading((prev)=>({...prev,[key]:value}))

  const fetchMovies = async (category:string)=>{
    try {
      setLoadingState(category,true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/movies/${category}`);
      switch(category){
        case "popular":
          setPopular(data);
          break;
        case "top_rated":
          setTopRated(data);
          break;
        case "upcoming":
          setUpcoming(data);
          break;
        case "now_playing":
          setNowPlaying(data);
          break;
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error fetching movies:");
    } finally{
      setLoadingState(category,false);
    }
  }



  const fetchGeneres = async (category:string)=>{
     try {
      setLoadingState(category,true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/genres/${category}`);
      setGenres(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error fetching movies:");
    } finally{
     setLoadingState(category,false);
    }
  }

  const fetchCartoons = async ()=>{
     try {
      setLoadingState('cartoons',true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoons`);
      setCartoons(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error fetching movies:");
    } finally{
      setLoadingState('cartoons',false);
    }
  }

  return (
    <>
    <MovieContext.Provider value={{
        popular,
        upcoming,
        genres,
        cartoons,
        topRated,
        nowPlaying,
        setGenres,
        setCartoons,
        loading,
        fetchMovies,
        fetchGeneres,
        fetchCartoons
      }}>
        {children}
    </MovieContext.Provider>
    </>
  )
}

export const useMovie=()=>{
   const context=useContext(MovieContext);
   if(!context) throw new Error('useMovie must be used inside <MovieProvider>');
   return context;
}