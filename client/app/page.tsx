'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useMovie } from "./context/MovieProvider";
import {  useEffect } from "react";
import IMovie from "./interface/movie.interface";
import Movie from "./components/Movie";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const {cartoons,fetchCartoons,loading} = useMovie();
  const router=useRouter();

  useEffect(()=>{
    if(cartoons.length===0){
      fetchCartoons();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])




  
    if(loading['cartoons']) {
        return (
            <div className="w-full h-screen flex items-center justify-center bg-black/80 opacity-80">
                <Loading/>
            </div>
        )
    }



  return (
    <div>
      <Navbar/>
      <div className="w-full min-h-screen pt-24">
        <div className="pdg flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {
            cartoons.map((movie:IMovie)=>(
              <div className=" relative shrink-0 " onClick={()=>router.push(`/movie/${movie.id}`)} key={movie.id} >
                <Image src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                 width={500} height={500} alt={"image"} className="rounded-lg object-cover w-96 h-[500px]" />
                 <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-tl from-black/80 to-transparent text-white rounded-b-lg">
                  <h1 className="text-lg font-semibold">{movie.title}</h1>
                   <p className="text-sm opacity-80">{movie.release_date.slice(0,10)}</p>
                 </div>
              </div>
            ))
          }
        </div>
        {/* genres */}
        {/* genres */}
        {/* movies start */}
        <Movie  category="popular" content="Mashxur"  />
        <Movie category="top_rated" content="Eng baxshi baholangan" />
        <Movie  category="upcoming" content="Yaqinlashib kelayotgan"  />
        <Movie category="now_playing" content="Hozir ijro etilmoqda" />
        {/* movies end */}
      </div>
      <Footer/>
      {/* footer */}
    </div>
  );
}
