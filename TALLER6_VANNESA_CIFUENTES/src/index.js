//REQUERIR LOS MODULOS NECESARIOS

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

//requerir base de datos
require('./database')

//AMOS A CONFIGURAR EL PUERTO QUE VAMOS A ESCUCHAR

app.set('Port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors({ origen: '*' }))

//aqui vamos a poner
app.use('/mascota', require('./routes/mascotas.route'));


//aquí vamos a utilizar las rutas
app.listen(app.get('Port'), () => {
    console.log("El servidor esta por el puerto: ", app.get('Port'));
})