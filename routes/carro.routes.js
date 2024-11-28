import { Router } from "express";
import { getAllCarros, getIDCarros, putCarros, postCarros, deleteCarros } from "../controller/carro.controller.js";

const carro = Router();

carro.get('/', getAllCarros);       // Obtener todos los carros
carro.get('/:id', getIDCarros);     // Obtener un carro por ID
carro.post('/', postCarros);        // Crear un nuevo carro
carro.put('/:id', putCarros);       // Actualizar un carro por ID
carro.delete('/:id', deleteCarros); // Eliminar un carro por ID

export default carro;
