const axios = require("axios");
const Movie=require("../dto/Movie");
const url=process.env.TMDB_URL || "12";
const key=process.env.KEY || "aa";
class MovieService{


    // popular,top_rated,upcoming,now_playing
    async getMovies(category){
        const {data} = await axios.get(`${url}/3/movie/${category}?api_key=${key}&language=en-US`);
        return data.results.map(m=>new Movie(m));
    }

    //popular,top_rated,on_the_air
    async getTVList(category){
        const {data} = await axios.get(`${url}/3/tv/${category}?api_key=${key}&language=en-US`);
        return data.results.map(m=>new Movie(m));

    }

    async getCartoons(){
        const {data} = await axios.get(`${url}/3/discover/movie?api_key=${key}&with_genres=16&language=en-US`);
        return data.results.map(m=>new Movie(m));

    }

    // movie,tv
    async getGeneres(category){
        const {data} = await axios.get(`${url}/3/genre/${category}/list?api_key=${key}&language=en`);
        return data.results.map(m=>new Movie(m));

    }

}
module.exports=new MovieService();