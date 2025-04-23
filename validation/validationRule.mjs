import { body } from "express-validator";

export const nuevoSuperHeroeValidationRules=()=>[
    body('id').notEmpty().withMessage('ID de Super Heroe Requerido'),
    body('nombreSuperHeroe').trim().isLength({min:3,max:60}).withMessage('caracter necesario para nombre de super heroes min=3 max=60'),
    body('nombreReal').trim().isLength({min:3,max:60}).withMessage('caracter necesario para nombre Real de super heroes min=3 max=60'),
    body('edad').isInt({ min: 0 }).withMessage('La edad debe ser un número entero igual o mayor a 0'),
];