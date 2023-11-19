const pool = require('../config/databaseController');
module.exports = {
    
// Consulta para obtener todos los estudiantes 
obtenerCarreras: async() => {
            
    try {
        const result = await pool.query('SELECT * FROM carreras');
        return result;
        } catch (error) {
            console.error('Ocurrio un problema al consultar la lista de carreras: ', error);
        }
    },
    // Eliminar un estudiante
eliminarCarrera: async(idcarrera) => {
    try{
    const result = await pool.query('DELETE FROM carreras WHERE idcarrera = ?', [idcarrera]);
    return result.affectedRows > 0;
    }catch(error){
    console.error('Error al eliminar el registro', error);
    }
},

agregarCarrera: async(carrera) =>
{
    var res = -1;
    try
    {
        const result = await pool.query('insert into carreras (carrera) '
                                        +'values(?,?)',[carrera]);
        if(result.affectedRows > 0)
        {
            res = 1;
        }
        else
        {
            res = 0;
        }
    }
    catch(error)
    {
        return 0;
    }

    return res;
},

actCarrera: async(idcarrera,carrera) => 
{
    var res = -1;
    try
    {
        const result = await pool.query('update carrera set carrera = ? where idcarrera = ?',
                                        [carre,idcarrera]);
        if(result.affectedRows > 0)
        {
            res = 1;
        }
        else
        {
            res = 0;
        }
    }
    catch(error)
    {
        return 0;
    }

    return res;

}


}


