const mongoose = require('mongoose')
URL = ('mongodb://localhost/bdMascotasBit');


mongoose.connect(URL, {

        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => console.log('base de datos conectada: ', db.connection.name))
    .catch(error => console.log(error))

//exportamos nuestro modulo de la db


module.exports = mongoose