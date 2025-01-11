const { ClientError } = require("../utils");

const data = [
	{
		id: 1,
		title: "titanis",
	},
	{
		id: 2,
		title: "The Godfather",
	},
	{
		id: 3,
		title: "The Dark Knight",
	}
]

const getAllMovies = async () => {
	return data;
}

/**@find () es un metodo de instancia */
const getMovieById = async (id) => {
	/**El método @find () devuelve el valor */
	/*del primer elemento del array que cumple */
	/*la función de prueba proporcionada.*/
	const movie = data.find((e) => e.id == id);
	if (!movie) throw new ClientError("invalid id", 404);
	return movie
}

const getMoviesByName = async (name) => {
	const movies = data.filter((e) => e.title == name);
	return movies;
}

module.exports = {
	getAllMovies,
	getMovieById,
	getMoviesByName
}