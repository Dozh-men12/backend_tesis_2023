const reservasDisponiblesModel = require ('../database/models/reservasDisponibles.model')


// Listando reservasDisponibles
const listarReservasDisponibles = async () => {
    try {
        const data = await reservasDisponiblesModel
            .find()
            .populate({
                path: 'estudiante',
                select: '-_id nombres id_estudiante especialidad', // Excluye el campo _id
            })
            .populate({
                path: 'dia',
                select: '-_id nombre', 
            })
            .populate({
                path: 'campo',
                select: '-_id nombre', 
            });

        return data;
    } catch (error) {
        console.error('Error al listar las reservas disponibles:', error);
        throw error; // Propaga el error
    }
}


//Listando reservasDisponibles por id_alumno
const listarRDporId = async (id) => {
    try {
        const data = await reservasDisponiblesModel
            .findById(id)
            .populate({
                path: 'estudiante',
                select: '-_id nombres id_estudiante especialidad', // Excluye el campo _id
            })
            .populate({
                path: 'dia',
                select: '-_id nombre', 
            })
            .populate({
                path: 'campo',
                select: '-_id nombre', 
            });
            

        return data;
    } catch (error) {
        console.error('Error al listar las reservas disponibles por usuario:', error);
        throw error;
    }
}

const agregarRD = async (data) =>{
    await reservasDisponiblesModel.create(data);
    const todasLasReservas = await listarReservasDisponibles();
    return todasLasReservas;
}





module.exports = { listarReservasDisponibles,listarRDporId,agregarRD};