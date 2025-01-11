const { ClientError } = require("../utils");

const data = [
	{
		id: 1,
		title: "The Shawshank Redemption",
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
	if (!movie) throw new ClientError("invalid id");
	return movie
}

module.exports = {
	getAllMovies,
	getMovieById
}