const mongoose = require('mongoose');
const { Schema } = mongoose

const serviciosSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: Number,
    tiempoEstimado: Number,
    placa: String,
    fechaServicio: Number,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('servicios', serviciosSchema)