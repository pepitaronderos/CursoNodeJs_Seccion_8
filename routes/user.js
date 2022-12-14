//Desestructuramos router del paquete de express
import { Router } from 'express';

//Importamos las funciones desde controller
import {
	usersGet,
	usersPut,
	usersPost,
	usersDelete,
	usersPatch
} from '../controllers/user.js';

//Guardamos router en una variable
const router = Router();

//Seteamos lo necesario, los callback se llaman de controllers impostados mas arriba
router.get("/", usersGet);
//En este caso estamos tomando un valor de la URL, podemos ponerle el nombre que querramos, es un parametro. Esto ya viene configurado en express que lo parasea y lo devuelve en los parms
router.put("/:id", usersPut);
router.post("/", usersPost);
router.delete("/", usersDelete);
router.patch("/", usersPatch);

export {
	router
}