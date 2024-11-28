import { Router } from "express";
import { getAllEjemplo, getIDEjemplo, postEjemplo, putEjemplo, deleteEjemplo } from "../controller/ejemplo.controller.js";

const ejemplo = Router()

ejemplo.get('/', getAllEjemplo)
ejemplo.get('/:id', getIDEjemplo)
ejemplo.post('/', postEjemplo)
ejemplo.put('/:id', putEjemplo)
ejemplo.delete('/:id', deleteEjemplo)

export default ejemplo