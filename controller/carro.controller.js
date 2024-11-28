import mongoose from "mongoose";
import carro from "../model/carro.model.js";

export const getAllCarros = async (req, res) => {
    console.log('Obteniendo todos los carros');
    try {
        const carros = await carro.find({}, { __v: 0 });
        if (carros.length === 0) {
            return res.status(404).json({
                msg: 'No se encontraron carros'
            });
        }
        return res.status(200).json({
            carros
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los carros'
        });
    }
}

export const getIDCarros = async (req, res) => {
    console.log('Obteniendo carro por ID');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const carroEncontrado = await carro.findById(id);
        if (!carroEncontrado) {
            return res.status(404).json({
                msg: 'Carro no encontrado'
            });
        }
        return res.status(200).json({
            carro: carroEncontrado
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener el carro'
        });
    }
}

export const postCarros = async (req, res) => {
    console.log('Agregando un nuevo carro');
    const body = req.body;
    const nuevoCarro = new carro(body);
    try {
        const validationError = nuevoCarro.validateSync();
        if (validationError) {
            const errorMessages = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                error: errorMessages
            });
        }
        await nuevoCarro.save();
        return res.status(201).json({
            carro: nuevoCarro
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al guardar el carro'
        });
    }
}

export const putCarros = async (req, res) => {
    console.log('Actualizando carro');
    const id = req.params.id;
    const body = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const carroActualizado = await carro.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!carroActualizado) {
            return res.status(404).json({
                msg: 'Carro no encontrado'
            });
        }
        return res.status(200).json({
            carro: carroActualizado
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar el carro'
        });
    }
}

export const deleteCarros = async (req, res) => {
    console.log('Eliminando carro por ID');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const carroEliminado = await carro.findByIdAndDelete(id);
        if (!carroEliminado) {
            return res.status(404).json({
                msg: 'Carro no encontrado'
            });
        }
        return res.status(200).json({
            msg: 'Carro eliminado'
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar el carro'
        });
    }
}


