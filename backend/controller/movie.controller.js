const movieService = require("../service/movie.service")
class MovieController{

    async movieList(req,res,next){
        try {
            const {category}=req.params;
            const movies = await movieService.movieList(category);
            return res.json(module);
        } catch (error) {
            next(error)
        }
    }

}
module.exports=new MovieController();