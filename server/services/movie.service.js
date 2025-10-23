const axios = require("axios");

const url=process.env.TMDB_URL || "12";
const key=process.env.KEY || "aa";
class MovieService{


    // popular,top_rated,upcoming,now_playing
    async getMovies(category){
        const {data} = await axios.get(`${url}/movie/${category}?api_key=${key}&language=en-US`);
        return data;
    }

    //popular,top_rated,on_the_air
    async getTVList(category){
        const {data} = await axios.get(`${url}/tv/${category}?api_key=${key}&language=en-US`);
        return data;
    }

    async getCartoons(){
        const {data} = await axios.get(`${url}/discover/movie?api_key=${key}&with_genres=16&language=en-US`);
        return data;
        console.log(data)
    }

    // movie,tv
    async getGeneres(category){
        const {data} = await axios.get(`${url}/genre/${category}/list?api_key=${key}&language=en`);
        return data;
    }

}
module.exports=new MovieService();