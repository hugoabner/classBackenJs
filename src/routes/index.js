 const { Router } = require('express'); 
 const { moviesController } = require("../controllers");
 const validateName = require("../middlewares/validateName");

 const router = Router();

 /* @Route para obtener peliculas */
 router.get("/movies", 
	validateName,
	moviesController.getMovies);

 /* @Route para realizar busqueda por Id */
router.get("/movies/:id", 
	moviesController.getMovieById);

 module.exports = router;