'use client'
import React, { Key, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useTv } from '../context/TvProvier'
import IMovie from '../interface/movie.interface'
import { useRouter } from 'next/navigation'

const SeriesPage = () => {
  const router=useRouter();
  const {series,popular,topRated,onTheAir,fetchTv} = useTv();

  useEffect(()=>{
    if(series.length===0){
      fetchTv('popular');
      fetchTv('top_rated');
      fetchTv('on_the_air');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const tvList = popular.concat(topRated,onTheAir);


  return (
    <div>
      <Navbar/>
       <div className="w-full min-h-screen pt-24">
              <div className="pdg">
                <h1 className='text-lg md:text-2xl font-semibold py-4'>Seriallar</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto pb-10">
                  {
                    tvList.map((serie:IMovie,index:Key)=>(
                      <div className=" relative shrink-0 cursor-pointer " onClick={()=>router.push(`/movie/${serie.id}`)} key={index} >
                                      <Image src={`https://image.tmdb.org/t/p/w500${serie?.poster_path}`} width={300} height={300} alt={"image"}  className="rounded-lg object-cover w-96 h-[300px]" />
                                       <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-tl from-black/80 to-transparent text-white rounded-b-lg">
                                        <h1 className="text-lg font-semibold">{serie.title}</h1>
                                         <p className="text-sm opacity-80">{serie.release_date}</p>
                                       </div>
                                    </div>
                    ))
                  }
                </div>
              </div>
            </div>
            {/* footer */}
            <Footer/>
    </div>
  )
}

export default SeriesPage