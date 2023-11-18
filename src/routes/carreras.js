const express = require('express');
const router = express.Router();
const queries = require('../repositories/CarrerasRepository');
// Endpoint para mostrar todos los estudiantes
router.get('/', async (request, response) => {
const estudiantes = await queries.obtenerCarreras();
response.render('carreras/listado', {estudiantes}); // Mostramos el listado de estudiantes
});
// Endpoint que permite mostrar el formulario para agregar un nuevo estudiante
router.get('/agregar', async(request, response) => {
// Renderizamos el formulario
response.render('carreras/agregar');
});
// Endpoint para agregar un estudiante
router.post('/agregar', async(request, response) => {
// Falta agregar logica
const res = await queries.agregarCarrera(nombre,apellido,email,usuario);
if(res > 0)
{
    console.log("Agregado");   
}
else{
    console.log("Error");
}

const est = await queries.obtenerCarreras();
response.render('estudiantes/listado', {est}); 

});
// Endpoint que permite eliminar un estudiante
router.get('/eliminar/:idcarrera', async(request, response) => {
// Desestructuramos el objeto que nos mandan en la peticion y extraemos el idestudiante
const { idcarrera } = request.params;
const resultado = await queries.eliminarCarrera(idcarrera);
if(resultado > 0){
console.log('Eliminado con éxito');
}
response.redirect('/estudiantes');
});
module.exports = router;