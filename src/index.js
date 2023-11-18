const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars'); // Necesario para utilizar el motor de plantillas handlebars
const path = require('path');

//Inicializaciones
const app = express();
require('dotenv').config();


//Ajustes al servidor 
app.set('port',process.env.PORT || 4500);
app.set('views', path.join(__dirname, 'views')); 

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main', layoutsDir: path.join(app.get('views'), 'layouts'), // Configuracion de la ruta de los layouts
    extname: '.hbs' // Configura la extensión que tendran los archivos HandleBars
    }));
    
app.set('view engine', '.hbs'); // Configuracion para ejecutar el motor de plantillas

app.use(morgan('dev')); // Configurando el middleware morgan para visualizar que esta llegando al servidor
app.use(express.urlencoded({extended: false})); // Sirve para poder aceptar datos desde formularios

app.use(require('./routes'));

app.use('/estudiantes',require('./routes/estudiantes')); // Configuracion de ruta para estudiantes

// Archivos publicos (aca se coloca todo el código al cual el navegador puede acceder)
app.use(express.static(path.join(__dirname, 'public')));
    
//Iniciar Servidor
app.listen(app.get('port'),() => {
    console.log('Servidor iniciado en el puerto: ', app.get('port'));   
});

