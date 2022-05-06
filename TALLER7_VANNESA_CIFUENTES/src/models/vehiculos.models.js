const mongoose = require('mongoose');
const { Schema } = mongoose

const vehiculosSchema = new Schema({
    tipo: String,
    marca: String,
    modelo: String,
    placa: String,
    estadoSOAT: Boolean,
    descripcionFalla: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('vehiculos', vehiculosSchema)