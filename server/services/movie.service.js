const axios = require("axios");
const redis=require("redis");
const Movie=require("../dto/Movie");
const Video=require("../dto/Video");

const url=process.env.TMDB_URL || "12";
const key=process.env.KEY || "aa";

let redisUrl;
if(process.env.NODE_ENV==="production"){
    redisUrl=process.env.REDIS_URL;
} else if(process.env.NODE_ENV === "development")  {
    redisUrl="redis://localhost:6379";
} else{
    redisUrl="redis://redis:6379";
}

const client=redis.createClient({
    url: redisUrl
});

(async ()=>{
    await client.connect();
    console.log("Redis connected");
})()

class MovieService{

    // popular,top_rated,upcoming,now_playing
    async getMovies(category){

        const cacheKey=`movies:${category}`;
        const cached=await client.get(cacheKey);
        if(cached){
            const jsonData=JSON.parse(cached);
            return jsonData.map(m=>new Movie(m));
        }
        const {data} = await axios.get(`${url}/3/movie/${category}?api_key=${key}&language=en-US`);
        await client.setEx(cacheKey,3600,JSON.stringify(data.results));
        return data.results.map(m=>new Movie(m));
    }

    //popular,top_rated,on_the_air
    async getTVList(category){  
        const cacheKey=`tv:${category}`;
        const cached=await client.get(cacheKey);
        if(cached){
          const jsonData=JSON.parse(cached);
          return jsonData.map(m=>new Movie(m));  
        }
        const {data} = await axios.get(`${url}/3/tv/${category}`,{
            params:{
                api_key:key,
                language:"en-US",
                page:3
            }
        });
        await client.setEx(cacheKey,3600,JSON.stringify(data.results));
        return data.results.map(m=>new Movie(m));

    }

    async getCartoons(){
        const cashedKey=`cartoons:cartoons`;
        const cached=await client.get(cashedKey);
        if(cached){
            const jsonData=JSON.parse(cached);
            return jsonData.map(m=>new Movie(m));
        }
        const {data} = await axios.get(`${url}/3/discover/movie?api_key=${key}&with_genres=16&language=en-US`);
        await client.setEx(cashedKey,3600,JSON.stringify(data.results));
        return data.results.map(m=>new Movie(m));

    }

    // movie,tv
    async getGeneres(category){
        const cacheKey=`genres:${category}`;
        const cached=await client.get(cacheKey);
        if(cached){
            const jsonData=JSON.parse(cached);
            return jsonData.map(g=>new Movie(g));
        }
        const {data} = await axios.get(`${url}/3/genre/${category}/list?api_key=${key}&language=en`);
        await client.setEx(cacheKey,3600,JSON.stringify(data.genres));
        return data.genres.map(g=>new Movie(g));

    }

    async getList(category){
        const cacheKey=`list:${category}`;
        const cached=await client.get(cacheKey);
        if(cached){
            const jsonData=JSON.parse(cached);
            return jsonData.map(m=>new Movie(m));
        }
        const {data} = await axios.get(`${url}/3/discover/${category}`,{
            params:{
                api_key:key,
                language:"en-US",
                sort_by:"popularity.desc",
                include_adult:false,
                page:1
            }
        });
        await client.setEx(cacheKey,3600,JSON.stringify(data.results));
        return data.results.map(m=>new Movie(m));
    }

    async getVideos(category,id){
        const cacheKey=`video:${id}`;
        const cached=await client.get(cacheKey);
        if(cached){
            const jsonData=JSON.parse(cached);
            return jsonData.map(v=>new Video(v));
        }
        const {data} = await axios.get(`${url}/3/${category}/${id}/videos?api_key=${key}&language=en-US`);
        console.log(data);
        if(data.results.length!==0){
             await client.setEx(cacheKey,3600,JSON.stringify(data.results));
        }
        return data.results.map(v=>new Video(v));
    }

}
module.exports=new MovieService();