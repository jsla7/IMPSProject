const pool = require('../config/databaseController');
module.exports = {
    
// Consulta para obtener todos los estudiantes 
obtProfesores: async() => {
            
    try {
        const result = await pool.query('SELECT * FROM profesores');
        return result;
        } catch (error) {
            console.error('Ocurrio un problema al consultar la lista de profesores: ', error);
        }
    },
    // Eliminar un estudiante
    eliminarProfesor: async(idprofesor) => {
    try{
    const result = await pool.query('DELETE FROM prrofesores WHERE idprofesor = ?', [idprofesor]);
    return result.affectedRows > 0;
    }catch(error){
    console.error('Error al eliminar el registro', error);
    }
},

agregarprofesor: async(nom,ape,fech,prof,gen,em) =>
{
    var res = -1;
    try
    {
        const result = await pool.query('insert into profesor (nombre,apellido,fecha_nacimiento,profesion,genero,email) '
                                        +'values(?,?,?,?,?,?)',[nom,ape,fech,prof,gen,em]);
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

actProf: async(idprofesor,nom,ape,fech,prof,gen,em) => 
{
    var res = -1;
    try
    {
        const result = await pool.query('update profesores et nombre = ?, apellido = ?, fecha_nacimiento = ?, profesion = ?, genero = ?, email = ? where idprofesor = ?',
                                        [nom,ape,fech,prof,gen,em,idprofesor]);
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


