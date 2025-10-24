'use client'
import React, { createContext, ReactNode, useContext, useState } from 'react';
import MovieContextType from '../interface/movieType.interface';
import IMovie from '../interface/movie.interface';
import toast from 'react-hot-toast';
import axios from 'axios';

const MovieContext=createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({children}:{children:ReactNode}) => {
  const [cartoons,setCartoons]=useState<IMovie[]>([]);
  const [series,setSeries]=useState<IMovie[]>([]);
  const [popular,setPopular]=useState<IMovie[]>([]);
  const [topRated,setTopRated]=useState<IMovie[]>([]);
  const [upcoming,setUpcoming]=useState<IMovie[]>([]);
  const [nowPlaying,setNowPlaying]=useState<IMovie[]>([]);
  const [loading,setLoading]=useState<boolean>(false);
  const [genres,setGenres]=useState<IMovie[]>([]);

  const fetchMovies = async (category:string)=>{
    try {
      setLoading(true);
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/movies/${category}`);
      if (category === "popular") setPopular(data.results);
      if (category === "top_rated") setTopRated(data.results);
      if (category === "upcoming") setUpcoming(data.results);
      if (category === "now_playing") setNowPlaying(data.results);
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
      setSeries(data);
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
      setGenres(data);
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
      setCartoons(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Error fetching movies:");
    } finally{
      setLoading(false);
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
        series,
        nowPlaying,
        setGenres,
        setSeries,
        setCartoons,
        loading,
        fetchMovies,
        fetchTv,
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