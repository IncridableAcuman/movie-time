'use client';
import IVIdeo from '@/app/interface/video.interface';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

const Video = () => {
  const [videos,setVideos]=React.useState<IVIdeo[]>();
  const {id}=useParams();

  const fetchVideos = async ()=>{
    try {
      const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/videos/movie/${id}`);
      setVideos(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to fetch videos");
    }
  }

  useEffect(()=>{
    fetchVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <div className="w-full min-h-screen pt-24">
      <div className="pdg container mx-auto">
        <div className="">
          {
            videos?.map((video:IVIdeo)=>(
              <div className="" key={video.id}>
                <iframe src={`https://www.youtube.com/embed/${video.key}`} 
                width={`100%`}
                height={`500`}
                title={video.name}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                className='rounded-md'
                frameBorder="0"/>
                <div className="flex items-center justify-between">
                  <h1 className="text-lg font-semibold mt-2">{video.name}</h1>
                  <p>{video.type}</p>
                  <p>{video.published_at.slice(0,10)}</p>
                </div>
              </div>
              
            )).slice(0,1)
            
          }

        </div>
      </div>
    </div>
    </>
  )
}

export default Video
