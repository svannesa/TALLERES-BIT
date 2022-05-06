const mongoose = require('mongoose');
const { Schema } = mongoose

const productosSchema = new Schema({
    nombre: String,
    marca: String,
    cantidad: Number,
    descripcion: String,
    precio: Number,
    estadoGarantia: Boolean,
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('productos', productosSchema)