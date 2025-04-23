import express from 'express';
import { crearSuperHeroeController ,actualizarSuperHeroeController ,eliminarSuperHeroeController,eliminarSuperHeroePorNombreController,dashboardController ,mostrarFormularioNuevoSuperheroe , mostrarFormularioEditarSuperheroe ,homeController } from '../controllers/superheroesControllers.mjs';
import {nuevoSuperHeroeValidationRules} from '../validation/validationRule.mjs'
import {handleValidationErrors} from '../validation/errorMiddlaware.mjs'

const router = express.Router();

// Nueva ruta para el dashboard
router.get('/dashboard', dashboardController);

//formulario para ingresar nuevo super heroe
router.get('/heroes/nuevo', mostrarFormularioNuevoSuperheroe);

//endpoint crear nuevo super heroe
router.post('/heroes', nuevoSuperHeroeValidationRules() ,handleValidationErrors, crearSuperHeroeController);

router.get('/heroes/:id/editar', mostrarFormularioEditarSuperheroe);


//endpoint para actualizar super heroes
router.put('/heroes/:id', actualizarSuperHeroeController);

//endpoint para eliminar y mostrar super heroe eliminado por id
router.delete('/heroes/:id', eliminarSuperHeroeController);

//endpoint para eliminar y mostrar super heroe eleimanod por nombre
router.delete('/heroes/nombre/:nombre', eliminarSuperHeroePorNombreController);

//endpoint para mostrar Pagina Principal
router.get('/home',homeController);
export default router;


