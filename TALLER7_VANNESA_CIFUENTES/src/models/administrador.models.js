const mongoose = require('mongoose');
const { Schema } = mongoose

const administradorSchema = new Schema({
    nombre: String,
    apellido: String,
    cedula: Number,
    telefono: Number,
    correo: String,
    contrasena: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('administrador', administradorSchema)