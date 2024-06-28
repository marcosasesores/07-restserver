// Importa el objeto response del módulo express
const { response } = require('express')

// Controlador para manejar las solicitudes GET
const usuariosGet = (req = request, res = response) => {
    // Extrae los parámetros de consulta 'q' y 'nombre' de la solicitud
    const { q, nombre } = req.query;

    // Envía una respuesta JSON con los parámetros recibidos y un mensaje
    res.json({
        ok: true, // Indicador de éxito
        msg: "get API - Controlador", // Mensaje de la API
        q, // Parámetro de consulta 'q'
        nombre // Parámetro de consulta 'nombre'
    });
}

// Controlador para manejar las solicitudes PUT
const usuariosPut = (req, res) => {
    // Extrae el parámetro 'id' de la URL
    const id = req.params.id;

    // Envía una respuesta JSON con el 'id' recibido y un mensaje, y establece el código de estado HTTP 400
    res.status(400).json({
        msg: "put API - Controlador", // Mensaje de la API
        id // Parámetro 'id' de la URL
    });
}

// Controlador para manejar las solicitudes POST
const usuariosPost = (req, res) => {
    // Extrae 'nombre' y 'edad' del cuerpo de la solicitud
    const { nombre, edad } = req.body;

    // Envía una respuesta JSON con los datos recibidos y un mensaje
    res.json({
        msg: "post API - Controlador", // Mensaje de la API
        nombre, // Nombre recibido en el cuerpo de la solicitud
        edad // Edad recibida en el cuerpo de la solicitud
    });
}

// Controlador para manejar las solicitudes DELETE
const usuariosDelete = (req, res) => {
    // Envía una respuesta JSON con un mensaje
    res.json({
        msg: "delete API - Controlador" // Mensaje de la API
    });
}

// Controlador para manejar las solicitudes PATCH
const usuariosPath = (req, res) => {
    // Envía una respuesta JSON con un mensaje
    res.json({
        msg: "patch API - Controlador" // Mensaje de la API
    });
}

// Exporta los controladores para que puedan ser utilizados en otras partes de la aplicación
module.exports = {
    usuariosGet, 
    usuariosPut, 
    usuariosPost, 
    usuariosDelete, 
    usuariosPath 
}
