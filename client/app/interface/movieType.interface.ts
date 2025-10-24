import React from "react";
import IMovie from "./movie.interface";

interface MovieContextType{
    popular:IMovie[];
    topRated:IMovie[];
    upcoming:IMovie[];
    nowPlaying:IMovie[];
    cartoons:IMovie[];
    series:IMovie[];
    genres:IMovie[];
    setGenres:React.Dispatch<React.SetStateAction<IMovie[]>>;
    setSeries:React.Dispatch<React.SetStateAction<IMovie[]>>;
    setCartoons:React.Dispatch<React.SetStateAction<IMovie[]>>;
    loading:boolean;
    fetchMovies:(category:string)=>Promise<void>;
    fetchTv:(category:string)=>Promise<void>;
    fetchGeneres:(category:string)=>Promise<void>;
    fetchCartoons:()=>Promise<void>;
}
export default MovieContextType;