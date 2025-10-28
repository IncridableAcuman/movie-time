'use client'

import { createContext, ReactNode, useContext, useState } from "react"
import toast from "react-hot-toast";
import axios from "axios";
import IMovie from "../interface/movie.interface";
import ITvType from "../interface/tvType.interface";
import { api } from "../api";

const TvContext=createContext<ITvType | undefined>(undefined);

export const TvProvier = ({children}:{children:ReactNode}) => {
    const [popular,setPopular]=useState<IMovie[]>([]);
    const [topRated,setTopRated]=useState<IMovie[]>([]);
    const [onTheAir,setOnTheAir]=useState<IMovie[]>([]);
    const [series,setSeries]=useState<IMovie[]>([]);

    const fetchTv = async (category:string)=>{
        try {
            const {data} = await axios.get(`${api}/tv/${category}`);
            switch(category){
                case "popular":
                    setPopular(data);
                    break;
                case "top_rated":
                    setTopRated(data);
                    break;
                case "on_the_air":
                    setOnTheAir(data);
                    break;
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error("Error fetching tv shows");
        } 
    }


  return (
    <>
    <TvContext.Provider value={{
        popular,setPopular,
        topRated,setTopRated,
        onTheAir,setOnTheAir,
        series,setSeries,
        fetchTv
        }} >
        {children}
    </TvContext.Provider>
    </>
  )
}

export const useTv=()=>{
    const context=useContext(TvContext);
    if(!context) throw new Error("useTv must be used within TvProvider");
    return context;
}
