import { response, request } from 'express';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//Creamos las funciones
const usersGet = (req = request, res = response) => {
	//Estamos desestructurando los valores que vienen de la url, en el caso de que nombre no venga por ejemplo, se le asigna un valor por defualt que se muestra solamente si ese valor no viene
	const { q, nombre = "No name", apikey } = req.query;

	res.json({
		msg: "get API - controlador",
		q,
		nombre,
		apikey
	});
}

const usersPut = (req, res) => {
	//tomamos el valor del url que sacamos en routes y lo pasamos al json
	const id = req.params.id;

	res.json({
		msg: "put API - controlador",
		id
	});
}

const usersPost = (req, res) => {
	//Tomamos el valor que nos envian del servidor y se lo pasamos al json como nuevos parametros
	const { nombre, edad } = req.body;

	res.json({
		msg: "post API - controlador",
		nombre,
		edad
	});
}

const usersDelete = (req, res) => {
	res.json({
		msg: "delete API - controlador"
	});
}

const usersPatch = (req, res) => {
	res.json({
		msg: "patch API - controlador"
	});
}

export {
	usersGet,
	usersPut,
	usersPost,
	usersDelete,
	usersPatch
}