import mongoose from "mongoose";

const carroSchema = new mongoose.Schema({
    marca: { 
        type: String, 
        required: true 
    },
    modelo: { 
        type: String, 
        required: true 
    },
    fecha: { 
        type: Number, 
        required: true 
    },
    precio: { 
        type: Number, 
        required: true 
    },
    color: { 
        type: String, 
        required: true 
    },
    km: { 
        type: Number, 
        required: true 
    }
});

const carro = mongoose.model('carro', carroSchema);

export default carro;
