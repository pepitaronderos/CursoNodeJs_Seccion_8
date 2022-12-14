import express from 'express';
import cors from 'cors';

import { router } from '../routes/user.js';

//Creamos la clase Server en donde vamos a poner todas las configuraciones necesarias para servir el contenido
class Server {
	constructor() {
		//Seteamos 
		this.app = express();
		this.port = process.env.PORT;
		this.usersPath = "/api/users";

		//Lamamos
		this.middlewares();
		this.routes();
	}

	middlewares() {
		//CORS
		this.app.use(cors());

		//Lectura y parseo del body, aca leemos la data que nos estan enviando
		this.app.use(express.json());

		//Leemos la carpeta Publica
		this.app.use(express.static("public"));
	}

	routes() {
		//Lamamos la ruta del constructor y los callback de router
		this.app.use(this.usersPath, router);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Example app listening on port ${this.port}`);
		});
	}
}

export {
	Server
}