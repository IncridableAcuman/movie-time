const {Router} =require("express");
const movieController=require("../controllers/movie.controller");

const router=Router();

router.get("/movies/:category",movieController.getMovies);
router.get("/tv/:category",movieController.getTVList);
router.get("/genres/:category",movieController.getGeneres);
router.get("/cartoons",movieController.getCartoons);
router.get("/list/:category",movieController.getListByCategory);


module.exports=router;