const express = require('express');

//Inicializaciones
const app = express();

//Ajustes al servidor 
app.set('port',process.env.PORT || 4000);

//Iniciar Servidor
app.listen(app.get('port'),() => {
    console.log('Servidor iniciado en el puerto: ', app.get('port'));   
});

