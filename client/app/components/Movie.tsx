'use client'
import React, { Key, useEffect } from 'react'
import { useMovie } from '../context/MovieProvider'
import Image from 'next/image';
import IMovie from '../interface/movie.interface';
import { ArrowRight } from 'lucide-react';
import Loading from './Loading';
import { useRouter } from 'next/navigation';

const Movie = ({category,content}:{category:string,content:string}) => {
    const router=useRouter();

    const {fetchMovies,popular,upcoming,topRated,nowPlaying,loading} = useMovie();

    const movies =  category ==="popular"
                    ? popular ?? []
                    : category ==="upcoming"
                    ? upcoming ?? []
                    : category ==="top_rated"
                    ? topRated ?? []
                    : category === "now_playing"
                    ? nowPlaying ?? []
                    : []

    useEffect(()=>{
        if(!movies ||  movies.length===0){
            fetchMovies(category);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    if(loading[category]) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-black/80 opacity-80">
                <Loading/>
            </div>
        )
    }

  return (
    <div className="">
        <h1 className='pl-16 md:pl-40 text-lg font-semibold flex items-center gap-3'>{content} Kinolar <ArrowRight size={20} className='cursor-pointer text-gray-400 hover:text-white transition-colors duration-300'/></h1>
        <div className='pdg flex items-center gap-4 overflow-x-auto scrollbar-hide'>
                {
                   movies.map((movie:IMovie,index:Key | undefined)=>(
                    <div className=" relative shrink-0 cursor-pointer " onClick={()=>router.push(`/movie/${movie.id}`)} key={index} >
                        <Image src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                        width={500} height={500} alt={"image"} className="rounded-lg object-cover w-64 h-[300px]" />
                        <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-t from-black/80 to-transparent text-white rounded-b-lg">
                        <h1 className="text-lg font-semibold">{movie.title}</h1>
                        <p className="text-sm opacity-80">{movie.release_date.slice(0,10)}</p>
                        </div>
                    </div>
                    ))
                }
        </div>
    </div>
  )
}

export default Movie