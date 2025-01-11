/*Creamos la clase ClientError que hereda de la clase Error */
class ClientError extends Error {
	/* Instanciamos el error */
	constructor(message, status = 400) {
		super(message);
		this.statusCode = status;
	}
}

// class AuthClientError extends Error {

// }
module.exports = ClientError