const pool = require('../config/databaseController');
module.exports = {
    
// Consulta para obtener todos los estudiantes 
obtMaterias: async() => {
            
    try {
        const result = await pool.query('SELECT * FROM materias');
        
        return result;
        } catch (error) {
            console.error('Ocurrio un problema al consultar la lista de materias: ', error);
        }
    },
    // Eliminar un estudiante
eliminarCarrera: async(idmateria) => {
    try{
    const result = await pool.query('DELETE FROM materias WHERE idmateria = ?', [idmateria]);
    return result.affectedRows > 0;
    }catch(error){
    console.error('Error al eliminar el registro', error);
    }
},

agregarmateria: async(materia) =>
{
    var res = -1;
    try
    {
        const result = await pool.query('insert into materias (materia) '
                                        +'values(?)',[materia]);
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

actCarrera: async(idmateria,materia) => 
{
    var res = -1;
    try
    {
        const result = await pool.query('update materias set materia = ? where idmateria = ?',
                                        [materia,idmateria]);
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


