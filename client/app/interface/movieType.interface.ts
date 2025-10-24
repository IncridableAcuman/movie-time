import IMovie from "./movie.interface";

interface MovieContextType{
    movies:IMovie[];
    setMovies:(movie:IMovie[])=>void;
    loading:boolean;
    fetchMovies:(category:string)=>Promise<void>;
    fetchTv:(category:string)=>Promise<void>;
    fetchGeneres:(category:string)=>Promise<void>;
    fetchCartoons:()=>Promise<void>;
}
export default MovieContextType;