const { Router } = require('express')
const movieController = require("../controller/movie.controller")

const router = Router()

router.get("/movies/:category",movieController.movieList);

module.exports=router;