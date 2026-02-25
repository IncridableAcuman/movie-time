const { Router } = require('express')
const movieController = require("../controller/movie.controller")
const authMiddleware = require("../middleware/auth.middleware")

const router = Router()

router.get("/movies/:category", authMiddleware, movieController.movieList);

module.exports = router;