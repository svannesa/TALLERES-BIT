const administradorCtrl = {};
const administradorModel = require('../models/administrador.models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

administradorCtrl.crearAdministrador = async(req, res) => {
    const { nombre, apellido, cedula, telefono, correo, contrasena } = req.body
    const nuevoAdministrador = new administradorModel({
        nombre,
        apellido,
        cedula,
        telefono,
        correo,
        contrasena
    })

    //REGISTRO DEL ADMINISTRADOR EN EL SISTEMA

    const correoAdministrador = await administradorModel.findOne({ correo: correo })
    if (correoAdministrador) {
        res.json({
            mensaje: 'Ya está registrado'
        })
    } else {
        nuevoAdministrador.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({ _id: nuevoAdministrador._id }, 'Secreta')
        await nuevoAdministrador.save()
        res.json({
            mensaje: 'Bienvenido',
            id: nuevoAdministrador._id,
            nombre: nuevoAdministrador.nombre,
            token
        })
    }
}

//LOGGIN

administradorCtrl.login = async(req, res) => {
    const { correo, contrasena } = req.body
    const administrador = await administradorModel.findOne({ correo: correo })
    if (!administrador) {
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, administrador.contrasena)
    if (match) {

        const token = jwt.sign({ _id: cliente._id }, 'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: administrador.id,
            nombre: administrador.nombre,
            token
        })

    } else {
        res.json({
            mensaje: 'Contraseña incorrecta'
        })
    }

}


module.exports = administradorCtrl