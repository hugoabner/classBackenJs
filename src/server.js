const express = require("express");
const morgan = require("morgan");
const resError = require("./utils/resError");


const server = express();

server.use(morgan("dev"));
server.use(express.json());
/*importamos el archivo routes */
server.use(require("./routes"));

server.use((err, req, res, next) => {
	res
});
module.exports = server;