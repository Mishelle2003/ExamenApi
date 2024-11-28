import ejemplo from "./ejemplo.routes.js";
import { Router } from "express";
import carro from "./carro.routes.js";

const indexRouter = Router();

indexRouter.use('/ejemplos', ejemplo)
indexRouter.use('/carro', carro)

export default indexRouter