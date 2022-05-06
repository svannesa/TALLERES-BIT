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

app.use('/cliente', require('./routes/cliente.route'));
app.use('/administrador', require('./routes/administrador.route'));
app.use('/productos', require('./routes/productos.route'));
app.use('/proveedores', require('./routes/proveedores.route'));
app.use('/servicios', require('./routes/servicios.route'))
app.use('/vehiculos', require('./routes/vehiculos.route'))

app.listen(app.get('Port'), () => {
    console.log("Escuchando al servidor:", app.get('Port'));
})