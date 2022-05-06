const mongoose = require('mongoose');
const { Schema } = mongoose

const proveedorSchema = new Schema({
    nombre: String,
    nit: Number,
    pais: String,
    direccion: String,
    telefono: Number,
    correo: String,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('proveedor', proveedorSchema)