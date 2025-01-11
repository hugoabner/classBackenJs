const { moviesService } = require("../services")
const { catchedAsync } = require("../utils");
const { response } = require("../utils");

/*Este controlador maneja la logica de negocio 
de la peticion que recibio, obtenemos la 
informacion de peliculas y respondemos al usuario */
const getMovies = async (req, res, next) => {
	const movies = await moviesService.getAllMovies();
	response(res, 200, movies);
};

const getMovieById = async (req, res, next) => {
	const { id } = req.params;
	const movie = await moviesService.getMovieById(id);
	response(res, 200, movie);
}

module.exports = {
	getMovies: catchedAsync(getMovies),
	getMovieById: catchedAsync(getMovieById),
}