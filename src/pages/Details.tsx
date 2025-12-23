import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { IMovie } from "../interface/movie.interface";
import { useLocation } from "react-router-dom";
import type { IVideo } from "../interface/video.interface";

const Details = () => {
    const [nowPlaying, setNowPlaying] = useState<IMovie[]>([]);
  const [popular, setPopular] = useState<IMovie[]>([]);
  const [topRated, setTopRated] = useState<IMovie[]>([]);
  const [upcoming, setUpcoming] = useState<IMovie[]>([]);
  const [videos, setVideos] = useState<IVideo[]>([]);
  const KEY = import.meta.env.VITE_API_KEY;
  const location = useLocation();
  const id = location.pathname.split("/")[2];




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

        const getVideos = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}`
        );
        setVideos(data.results);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong.");
      }
    }
    getVideos();

  }, [KEY, id]);

  const allMovies = [...nowPlaying, ...popular, ...topRated, ...upcoming];

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
    <div className="w-full min-h-screen p-8">
      <img src={`https://image.tmdb.org/t/p/w500${allMovies.filter((movie) => movie.id === parseInt(id))[0]?.poster_path}`} alt={allMovies[0]?.original_title} className="w-full h-96 object-cover rounded-lg shadow-2xl shadow-pink-600 " />
      <div className="py-8">
        <h1 className="text-4xl font-extrabold mb-4">{allMovies[0]?.original_title}</h1>
        <p className="text-lg">{allMovies[0]?.overview}</p>
      </div>
        <h2 className="text-2xl font-bold mb-4">Trailers</h2>
        <div className="flex flex-wrap gap-6">
          {videos.map((video) => (
            <div key={video.id} className="w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-lg font-semibold mb-2">{video.name}</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Details