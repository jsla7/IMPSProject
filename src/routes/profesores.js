const express = require('express');
const router = express.Router();
const queries = require('../repositories/ProfesorRepository');

router.get('/', async (request, response) => {
const profs = await queries.obtProfesores();
response.render('profesores/listado', {profs});
});

router.get('/agregar', async(request, response) => {
// Renderizamos el formulario
response.render('profesores/agregar');
});

router.post('/agregar', async(request, response) => {

const res = await queries.agregarprofesor();
if(res > 0)
{
    console.log("Agregado");   
}
else{
    console.log("Error");
}

const profs = await queries.obtProfesores();
response.render('profesores/listado', {profs}); 

});

router.get('/eliminar/:idprofesor', async(request, response) => {

const { idprofesor } = request.params;
const resultado = await queries.eliminarProfesor(idprofesor);
if(resultado > 0){
console.log('Eliminado con éxito');
}
response.redirect('/profesores');
});
module.exports = router;