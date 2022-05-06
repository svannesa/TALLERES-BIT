//const { default: mongoose, Schema } = require("mongoose")

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mascotasSchema = new Schema({
    nombreDeLaMascota: { type: String, required: [true, 'Nombre obligatorio'] },
    tipoDeMascota: String,
    raza: String,
    edad: Number,
    estadoVacuna: String,
    nombreDelDueño: String,
    cedulaDueño: String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true }

})

//convertir a modelo

module.exports = mongoose.model('mascota', mascotasSchema)