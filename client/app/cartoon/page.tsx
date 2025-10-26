'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import { useMovie } from '../context/MovieProvider'
import Loading from '../components/Loading'
import Image from 'next/image'
import Footer from '../components/Footer'

const CartoonPage = () => {
  const {fetchCartoons,cartoons} = useMovie();

  React.useEffect(()=>{
    if(cartoons.length===0){
      fetchCartoons();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  if(cartoons.length===0) {
    return (
     <div className="w-full h-screen flex items-center justify-center bg-black/80">
       <Loading/>
     </div>
    )
  }

  return (
    <div>
      <Navbar/>
       <div className="w-full min-h-screen pt-24">
              <div className="pdg">
                <h1 className='text-lg md:text-2xl font-semibold py-4'>Multifilmlar</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto pb-10">
                  {
                    cartoons.map((movie,index)=>(
                      <div className=" relative shrink-0 " key={index} >
                                      <Image src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} width={300} height={300} alt={"image"}  className="rounded-lg object-cover w-96 h-[300px]" />
                                       <div className="absolute bottom-0 left-0 w-full p-3 bg-linear-to-tl from-black/80 to-transparent text-white rounded-b-lg">
                                        <h1 className="text-lg font-semibold">{movie.title}</h1>
                                         <p className="text-sm opacity-80">{movie.release_date.slice(0,10)}</p>
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

export default CartoonPage