const express = require('express');

//Inicializaciones
const app = express();
require('dotenv').config();


//Ajustes al servidor 
app.set('port',process.env.PORT || 4500);

app.use(require('./routes'));

//Iniciar Servidor
app.listen(app.get('port'),() => {
    console.log('Servidor iniciado en el puerto: ', app.get('port'));   
});

