const MascotaCtrl = {};
const res = require("express/lib/response");
const mascota = require("../models/mascotas.models");

MascotaCtrl.crear = async(req, res) => {
    const {
        nombreDeLaMascota,
        tipoDeMascota,
        raza,
        edad,
        estadoVacuna,
        nombreDelDueño,
        cedulaDueño
    } = req.body

    const nuevaMascota = new mascota({
        nombreDeLaMascota,
        tipoDeMascota,
        raza,
        edad,
        estadoVacuna,
        nombreDelDueño,
        cedulaDueño

    })

    // Aquí evaluamos la respuesta, si es ok: nos va a retornar un mensaje positivo
    const respuesta = await nuevaMascota.save()
    res.json({
        mensaje: 'Mascota creada',
        respuesta
    })



}



MascotaCtrl.listar = async(req, res) => {
    const respuesta = await mascota.find()
    res.json(respuesta)
}

module.exports = MascotaCtrl;