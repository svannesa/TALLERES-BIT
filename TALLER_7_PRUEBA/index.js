const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database')

//configurar el puerto

app.set('Port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origen: '*' }));


app.use('/cliente', require('./src/routes/cliente.route'));
app.use('/administrador', require('./src/routes/administrador.route'));
app.use('/productos', require('./src/routes/productos.route'));
app.use('/proveedores', require('./src/routes/proveedores.route'));
app.use('/servicios', require('./src/routes/servicios.route'));
app.use('/vehiculos', require('./src/routes/vehiculos.route'));

app.listen(app.get('Port'), () => {
    console.log("Escuchando al servidor:", app.get('Port'));
})