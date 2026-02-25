// src/components/Movie.jsx
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../api/axios.api";
import { useNavigate } from "react-router-dom";

const Movie = ({ category, title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchMovies = async (signal) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axiosInstance.get(`/tmdb/movies/${category}`, {
        signal,
      });

      setMovies(Array.isArray(data) ? data : []);
    } catch (err) {
      if (err.name !== "CanceledError" && err.name !== "AbortError") {
        const message =
          err.response?.data?.message ||
          err.message ||
          "Filmlarni yuklab bo'lmadi";
        console.error("Movies fetch error:", err);
        setError(message);
        toast.error(message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchMovies(controller.signal);

    return () => {
      controller.abort();
    };
  }, [category]);

  const handleRetry = () => {
    const controller = new AbortController();
    fetchMovies(controller.signal);

    // cleanup uchun (agar komponent unmount bo'lsa)
    return () => controller.abort();
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white capitalize">
          {title || category.replace(/_/g, " ")}
        </h2>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-800/50 rounded-xl overflow-hidden aspect-2/3 animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <p className="text-red-400 text-lg mb-6">{error}</p>
            <button
              onClick={handleRetry}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-medium rounded-lg transition-colors shadow-md"
            >
              Qayta yuklash
            </button>
          </div>
        ) : movies.length === 0 ? (
          <div className="text-center py-16 text-gray-400 text-lg">
            Bu kategoriyada hozircha film mavjud emas
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {movies.slice(0, 10).map((movie) => (
              <div
                key={movie.id}
                onClick={()=>navigate(`/video/${movie.id}`)}
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <div className="relative aspect-2/3 overflow-hidden">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/500x750/1f2937/ffffff?text=No+Poster"
                    }
                    alt={movie.title || movie.name || "Movie poster"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-white line-clamp-2 min-h-[2.8rem] group-hover:text-blue-300 transition-colors">
                    {movie.title || movie.name || "No title"}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {movie.release_date
                      ? new Date(movie.release_date).getFullYear()
                      : "—"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Movie;