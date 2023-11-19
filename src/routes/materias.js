const express = require('express');
const router = express.Router();
const queries = require('../repositories/MateriaRepository');

router.get('/', async (request, response) => {
const materias = await queries.obtMaterias();
response.render('materias/listado', {materias});
});

router.get('/agregar', async(request, response) => {
// Renderizamos el formulario
response.render('materias/agregar');
});

router.post('/agregar', async(request, response) => {

const res = await queries.agregarmateria();
if(res > 0)
{
    console.log("Agregado");   
}
else{
    console.log("Error");
}

const est = await queries.obtMaterias();
response.render('materias/listado', {est}); 

});

router.get('/eliminar/:idmateria', async(request, response) => {

const { idmateria } = request.params;
const resultado = await queries.eliminarmateria(idmateria);
if(resultado > 0){
console.log('Eliminado con éxito');
}
response.redirect('/materias');
});
module.exports = router;