'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useMovie } from "./context/MovieProvider";
import { Key, useEffect } from "react";
import IMovie from "./interface/movie.interface";

export default function Home() {
  const {movies,fetchCartoons} = useMovie();

  useEffect(()=>{
    fetchCartoons();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



  return (
    <div>
      <Navbar/>
      <div className="w-full min-h-screen pt-24">
        <div className="pdg flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {
            movies.map((movie:IMovie,index:Key | undefined)=>(
              <div className=" relative shrink-0 " key={index} >
                <Image src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                 width={500} height={500} alt={"image"} className="rounded-lg object-cover w-96 h-[500px]" />
                 <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-black/80 to-transparent text-white rounded-b-lg">
                  <h1 className="text-lg font-semibold">{movie.title}</h1>
                   <p className="text-sm opacity-80">{movie.release_date.slice(0,10)}</p>
                 </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
