const pool = require('../config/databaseController');
module.exports = {
    
// Consulta para obtener todos los estudiantes 
obtenerTodosLosEstudiantes: async() => {
            
    try {
        const result = await pool.query('SELECT * FROM estudiantes');
        return result;
        } catch (error) {
            console.error('Ocurrio un problema al consultar la lista de estudiantes: ', error);
        }
    },
    // Eliminar un estudiante
eliminarEstudiante: async(idestudiante) => {
    try{
    const result = await pool.query('DELETE FROM estudiantes WHERE idestudiante = ?', [idestudiante]);
    return result.affectedRows > 0;
    }catch(error){
    console.error('Error al eliminar el registro', error);
    }
},

agregarEstudiante: async(nombre,apellido,email,usuario) =>
{
    var res = -1;
    try
    {
        const result = await pool.query('insert into estudiantes (nombre,apellido,email,usuario) '
                                        +'values(?,?,?,?)',[nombre,apellido,email,usuario]);
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

actEstudiante: async(nombre,apellido,email,usuario,idestudiante) => 
{
    var res = -1;
    try
    {
        const result = await pool.query('update estudiantes set nombre = ?,apellido = ?,email = ?,usuario = ? where idestudiante = ?',
                                        [nombre,apellido,email,usuario,idestudiante]);
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


