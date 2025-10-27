import IMovie from "./movie.interface";
import IVIdeo from "./video.interface";

interface ITvType{
    popular:IMovie[];
    topRated:IMovie[];
    onTheAir:IMovie[];
    setVideos:React.Dispatch<React.SetStateAction<IVIdeo[]>>;
    series:IMovie[];
    setPopular:React.Dispatch<React.SetStateAction<IMovie[]>>;
    setTopRated:React.Dispatch<React.SetStateAction<IMovie[]>>;
    setOnTheAir:React.Dispatch<React.SetStateAction<IMovie[]>>;
    setSeries:React.Dispatch<React.SetStateAction<IMovie[]>>;
    fetchTv:(category:string)=>Promise<void>;
}
export default ITvType;