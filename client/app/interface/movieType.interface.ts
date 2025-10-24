import IMovie from "./movie.interface";

interface MovieContextType{
    movies:IMovie[];
    setMovies:(movie:IMovie[])=>void;
    loading:boolean;
    fetchMovies:(category:string)=>Promise<void>;
}
export default MovieContextType;