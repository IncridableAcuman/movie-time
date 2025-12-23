import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import axios from "axios";
import { toast } from "react-toastify";
import type { IMovie } from "../interface/movie.interface";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState<IMovie[]>([]);
  const [popular, setPopular] = useState<IMovie[]>([]);
  const [topRated, setTopRated] = useState<IMovie[]>([]);
  const [upcoming, setUpcoming] = useState<IMovie[]>([]);
  const KEY = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();



  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}`
        );
        setNowPlaying(data.results);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong.");
      }
    };
    getNowPlaying();
  }, [KEY]);

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}`
        );
        setPopular(data.results);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong.");
      }
    };
    getNowPlaying();
  }, [KEY]);

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}`
        );
        setTopRated(data.results);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong.");
      }
    };
    getNowPlaying();
  }, [KEY]);

  useEffect(() => {
    const getNowPlaying = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}`
        );
        setUpcoming(data.results);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong.");
      }
    };
    getNowPlaying();
  }, [KEY]);


  return (
    <>
      <div className="w-full min-h-screen">


        <div className="p-8">
          <img src="./bnr.jfif" alt="banner" className="w-full h-96 object-cover rounded-lg shadow-2xl shadow-pink-600" />
          <div className="flex items-center overflow-x-auto gap-2 pt-16">
            <div className="flex items-center overflow-x-auto gap-2">
              {
                nowPlaying.map((playing) => (
                  <div key={playing.id} className="min-w-96 max-w-96 bg-gray-900 text-white border border-gray-800 shadow-md hover:shadow-2xl hover:shadow-pink-600 transition duration-300 p-4">
                    <img onClick={()=>navigate(`/details/${playing.id}`)} src={`https://image.tmdb.org/t/p/w500${playing?.poster_path}`} alt={playing?.original_title} className="rounded-t-md cursor-pointer" />
                    <div className="bg-pink-800 text-white p-3 rounded-b-md">
                      <h1 className="text-lg font-extrabold">{playing?.original_title}</h1>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
          <div className="flex items-center overflow-x-auto gap-2 pt-16">
            {/* popular movies */}
            <div className="flex items-center overflow-x-auto gap-2">
              {
                popular.map((playing) => (
                  <div key={playing.id} className="min-w-96 max-w-96 bg-gray-900 text-white border border-gray-800 shadow-md hover:shadow-2xl hover:shadow-pink-600 transition duration-300 p-4">
                    <img onClick={()=>navigate(`/details/${playing.id}`)} src={`https://image.tmdb.org/t/p/w500${playing?.poster_path}`} alt={playing?.original_title} className="rounded-t-md cursor-pointer" />
                    <div className="bg-pink-800 text-white p-3 rounded-b-md">
                      <h1 className="text-lg font-extrabold">{playing?.original_title}</h1>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
          <div className="flex items-center overflow-x-auto gap-2 pt-16">
            {/* top rated movies */}
            <div className="flex items-center overflow-x-auto gap-2">
              {
                topRated.map((playing) => (
                  <div key={playing.id} className="min-w-96 max-w-96 bg-gray-900 text-white border border-gray-800 shadow-md hover:shadow-2xl hover:shadow-pink-600 transition duration-300 p-4">
                    <img onClick={()=>navigate(`/details/${playing.id}`)} src={`https://image.tmdb.org/t/p/w500${playing?.poster_path}`} alt={playing?.original_title} className="rounded-t-md cursor-pointer" />
                    <div className="bg-pink-800 text-white p-3 rounded-b-md">
                      <h1 className="text-lg font-extrabold">{playing?.original_title}</h1>
                    </div>
                  </div>
                ))
              }

            </div>
            </div>
          <div className="flex items-center overflow-x-auto gap-2 pt-16">
            {/* upcoming movies */}
            <div className="flex items-center overflow-x-auto gap-2">
              {
                upcoming.map((playing) => (
                  <div key={playing.id} className="min-w-96 max-w-96 bg-gray-900 text-white border border-gray-800 shadow-md hover:shadow-2xl hover:shadow-pink-600 transition duration-300 p-4">
                    <img onClick={()=>navigate(`/details/${playing.id}`)} src={`https://image.tmdb.org/t/p/w500${playing?.poster_path}`} alt={playing?.original_title} className="rounded-t-md cursor-pointer" />
                    <div className="bg-pink-800 text-white p-3 rounded-b-md">
                      <h1 className="text-lg font-extrabold">{playing?.original_title}</h1>
                    </div>
                  </div>
                ))
              }

            </div>
            </div>
          </div>

      </div>
      <Footer />
    </>

  )
}

export default Home