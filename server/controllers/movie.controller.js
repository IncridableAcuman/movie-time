const movieService=require("../services/movie.service");


class MovieController{

    async getMovies (req,res){
        try {
            const {category} = req.params;
            const data = await movieService.getMovies(category);
            return res.json(data);
        } catch (error) {
             return res.status(500).json({success:false,message:"Network Error"});
            
        }
    }

    async getTVList(req,res){
        try {
            const {category}=req.params;
            const data = await movieService.getTVList(category);
            return res.json(data);
        } catch (error) {
             return res.status(500).json({success:false,message:"Network Error"});

        }
    }

    async getCartoons(req,res){
        try {
           const data = await  movieService.getCartoons();
           return res.json(data);
        } catch (error) {
           return res.status(500).json({success:false,message:"Network Error"}); 
        }
    }

    async getGeneres(req,res){
        try {
            const {category}=req.params;
            const data = await movieService.getGeneres(category);
            return res.json(data);
        } catch (error) {
            return res.status(500).json({success:false,message:"Network Error"});
            
        }
    }
}
module.exports=new MovieController();