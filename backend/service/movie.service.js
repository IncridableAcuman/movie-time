const axios = require('axios')
const BaseError=require('../error/base.error')
const Dto = require("../dto/movie.dto")


class MovieService {

    async movieList(category) {
        if(!category){
            throw BaseError.BadRequest("Category must be required!")
        }
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${category}`,{
            params:{
                api_key:process.env.TMDB_KEY,
                language: 'en-US',
                page:1
            }
        })
        return data.results.map((movie)=> new Dto(movie))

    }

}
module.exports = new MovieService();