const mongoose = require('mongoose');
const { Schema } = mongoose

const clienteSchema = new Schema({
    nombre: String,
    apellido: String,
    cedula: Number,
    placa: String,
    telefono: Number,
    correo: String,
    contrasena: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('cliente', clienteSchema)