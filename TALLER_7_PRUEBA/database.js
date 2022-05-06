const mongoose = require('mongoose');
//la dirección 127.0.0.1 es el mismo localhost
//URL=('mongodb://127.0.0.1/login');

//URL = ('mongodb://localhost/Taller7');
URL = ('mongodb+srv://mongo123:Qy3bQ5I89pe9iOll@cluster0.fi6ly.mongodb.net/mongoTaller?retryWrites=true&w=majority');

mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('Conexión exitosa a la bd: ', db.connection.name))
    .catch(error => console.log(error))

module.exports = mongoose